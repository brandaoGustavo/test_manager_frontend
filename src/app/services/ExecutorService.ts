import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { TestCase } from "../model/TestCase";
import { ExecutorResponse } from "../model/ExecutorResponse";

@Injectable({
    providedIn: 'root'
})

export class ExecutorService {

    private TEST_CASE_API_PATH: string = "/executor";

    private apiUrl = `${environment.UrlHostPortBackend}${this.TEST_CASE_API_PATH}`;

    constructor(private http: HttpClient) { }

    public executeTestCase(testCaseId: number){
        return this.http.get(`${this.apiUrl}/execute/testcase/${testCaseId}`).pipe(
            catchError(e => {
                alert('Erro ao inserir caso de teste');
              return throwError(() => new Error('erro'));
            })
        );
    }
}