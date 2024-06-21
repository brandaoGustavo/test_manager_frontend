import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestCase } from 'src/app/model/TestCase';
import { TestObject } from 'src/app/model/TestObject';
import { TestCaseService } from 'src/app/services/TestCaseService';

@Component({
  selector: 'app-test-case-form',
  templateUrl: './test-case-form.component.html',
  styleUrls: ['./test-case-form.component.scss']
})
export class TestCaseFormComponent {

  actionList: any[] = [];
  byTypeList: string[] = [];

  testCaseList: TestCase[] = [];

  selectedTestCase: TestCase = new TestCase();
  selectedTestObject: TestObject = new TestObject();
    
  constructor(private testCaseService: TestCaseService, public activatedRoute: ActivatedRoute, private router: Router) {

    this.actionList = [
      { name: 'Abrir página', value: 'get_url', showInputs:['input_testobject_url'] },
      { name: 'Preencher campo', value: 'input_text_on', showInputs:['input_testobject_byType','input_testobject_element','input_testobject_inputText'] },
      { name: 'Clicar', value: 'click_on', showInputs:['input_testobject_byType','input_testobject_element'] },
      { name: 'Comparar textos', value: 'compare_text', showInputs:['input_testobject_byType','input_testobject_element','input_testobject_expectedOutput'] },
      { name: 'Aceitar alerta', value: 'accept_alert', showInputs:[] },
      { name: 'Negar alerta', value: 'deny_alert', showInputs:[] },
      { name: 'Comparar texto do alerta', value: 'compare_alert_text', showInputs:['input_testobject_expectedOutput'] },
      { name: 'Verificar se elemento está selecionado', value: 'is_element_selected', showInputs:['input_testobject_byType','input_testobject_element'] },
      { name: 'Limpar elemento', value: 'clear_element', showInputs:['input_testobject_byType','input_testobject_element'] },
      { name: 'Verificar se elemento está sendo exibido', value: 'is_element_displayed', showInputs:['input_testobject_byType','input_testobject_element'] },
      { name: 'Submit', value: 'element_submit', showInputs:['input_testobject_byType','input_testobject_element'] },
      { name: 'Tempo de espera', value: 'sleep_time', showInputs:['input_testobject_sleeptime'] },
    ];

    this.byTypeList = ['id','xpath', 'name', 'className', 'cssSelector', 'tagName'];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const testCaseId = params["id"];
      this.getDetailedTestCase(testCaseId);
    });
  }

  public getDetailedTestCase(testCaseId: number) {
    if (testCaseId) {
      this.testCaseService.getDetailedTestCase(testCaseId).subscribe(response => {
        this.selectedTestCase = response;
      });
    }
  }

  public selectTestObject(testObject: TestObject) {
    this.selectedTestObject = { ...testObject };
  }

  public showFormInput(inputRowId:string):boolean {
    let action = this.actionList.find(object => object.value == this.selectedTestObject.action);
    return action && action.showInputs.includes(inputRowId);
  }

  public clearTestObjectFields() {
    this.selectedTestObject = new TestObject();
  }

  public isTestObjectSelected(testObjectId: number) {
    return this.selectedTestObject && this.selectedTestObject.id == testObjectId;
  }

  public saveTestObject() {
    if (this.selectedTestCase.tests) {
      for (var test of this.selectedTestCase.tests) {
        if ((test.id && test.id == this.selectedTestObject.id) || (!test.id && test.title == this.selectedTestObject.title)) {
          this.copyPropertiesFromTestObject(this.selectedTestObject, test);
          break;
        } else {
          const maxSortNumber = Math.max(...this.selectedTestCase.tests.map(item => item.sortNumber));
          this.selectedTestObject.sortNumber = maxSortNumber + 1;
          this.selectedTestCase.tests.push(this.selectedTestObject);
          break;
        }
      }
    } else {
      this.selectedTestCase.tests = [];
      this.selectedTestObject.sortNumber = 0;
      this.selectedTestCase.tests.push(this.selectedTestObject);
    }
  
    this.clearTestObjectFields();
  }

  public deleteTestObject() {
    this.selectedTestCase.tests = this.selectedTestCase.tests.filter(obj => obj.id !== this.selectedTestObject.id);
    this.clearTestObjectFields();
  }

  public copyPropertiesFromTestObject(testObjectFrom: TestObject, testObjectTo: TestObject) {
    testObjectTo.id = testObjectFrom.id;
    testObjectTo.title = testObjectFrom.title;
    testObjectTo.action = testObjectFrom.action;
    testObjectTo.byType = testObjectFrom.byType;
    testObjectTo.element = testObjectFrom.element;
    testObjectTo.url = testObjectFrom.url;
    testObjectTo.inputText = testObjectFrom.inputText;
    testObjectTo.expectedOutput = testObjectFrom.expectedOutput;
    testObjectTo.sleepTime = testObjectFrom.sleepTime;
    testObjectTo.sortNumber = testObjectFrom.sortNumber;
  }

  public saveTestCase() {
    if (this.selectedTestCase.id != null) {
      this.testCaseService.editTestCase(this.selectedTestCase).subscribe( () => {
        alert('Teste editado com sucesso!');
      });
    } else {
      this.testCaseService.insertNewTestCase(this.selectedTestCase).subscribe( () => {
        alert('Teste criado com sucesso!');
      });
    }

    this.router.navigate(['/test_case/manager']);
  }

}
