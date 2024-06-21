import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { TestCase } from "../model/TestCase";

@Injectable({
    providedIn: 'root'
})

export class TestCaseService {

    private TEST_CASE_API_PATH: string = "/testcase";

    private apiUrl = `${environment.UrlHostPortBackend}${this.TEST_CASE_API_PATH}`;

    constructor(private http: HttpClient) { }

    public findAllTestCases(): Observable<any> {
        return this.http.get(`${this.apiUrl}/find/all`).pipe(
            catchError(e => {
                alert('Erro ao carregar casos de teste');
              return throwError(() => new Error('erro'));
            })
        );
    }

    public getDetailedTestCase(id:number): Observable<TestCase> {
        return this.http.get<TestCase>(`${this.apiUrl}/detail/${id}`).pipe(
            catchError(e => {
                alert('Erro ao carregar casos de teste');
              return throwError(() => new Error('erro'));
            })
        );
    }

    public deleteTestCaseById(id: number) {
        return this.http.delete<TestCase>(`${this.apiUrl}/delete/${id}`).pipe(
            catchError(e => {
                alert('Erro ao excluir caso de teste');
              return throwError(() => new Error('erro'));
            })
        );
    }

    public insertNewTestCase(testCase: TestCase) {
        return this.http.post(`${this.apiUrl}/new`, testCase).pipe(
            catchError(e => {
                alert('Erro ao inserir caso de teste');
              return throwError(() => new Error('erro'));
            })
        );
    }

    public editTestCase(testCase: TestCase) {
        return this.http.put<TestCase>(`${this.apiUrl}/edit/${testCase.id}`, testCase).pipe(
          catchError(e => {
            alert('Erro ao editar casos de teste');
              return throwError(() => new Error('erro'));
          })
        );
      }


    public cloneTestCase(testCaseId: number) {
        return this.http.post(`${this.apiUrl}/clone/${testCaseId}`, {}).pipe(
            catchError(e => {
                alert('Erro ao clonar caso de teste');
              return throwError(() => new Error('erro'));
            })
        );
    }
}