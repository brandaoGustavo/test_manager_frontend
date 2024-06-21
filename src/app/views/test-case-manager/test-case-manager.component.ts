import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExecutorResponse } from 'src/app/model/ExecutorResponse';
import { TestCase } from 'src/app/model/TestCase';
import { ExecutorService } from 'src/app/services/ExecutorService';
import { TestCaseService } from 'src/app/services/TestCaseService';

@Component({
  selector: 'app-test-case-manager',
  templateUrl: './test-case-manager.component.html',
  styleUrls: ['./test-case-manager.component.css']
})

export class TestCaseManagerComponent {

    testCaseList: TestCase[] = [];
    loading: boolean = false;

    constructor(private testCaseService: TestCaseService, private executorService: ExecutorService, private router: Router) { }

    ngOnInit(): void {
        this.findAllTestCases();
    }
    
    public findAllTestCases() {
        this.testCaseService.findAllTestCases().subscribe(response => {
            this.testCaseList = response;
          });
    }

    public deleteTestCaseById(testCaseId: number) {
        this.testCaseService.deleteTestCaseById(testCaseId);
    }

    public cloneTestCase(testCaseId: number) {
        this.testCaseService.cloneTestCase(testCaseId);
    }

    public goToEditTestCasePage(testCaseId: number) {
        this.router.navigate(['/test_case/detail/'+testCaseId]);
    }

    public executeTestCase(testCaseId: number) {
        this.loading = true;
        this.executorService.executeTestCase(testCaseId).subscribe( (response) => {
            this.loading = false;
            let executorResponse = response as ExecutorResponse

            if (executorResponse.type == "Error") {
                console.log(executorResponse.description);
                alert(executorResponse.title);
            } else {
                alert('Testes executados com sucesso!');
            }
            
        });
    }

}
