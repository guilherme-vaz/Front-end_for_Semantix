import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';
import { Job } from 'src/app/models/job';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const urlApi =
  'https://tlko4ot709.execute-api.sa-east-1.amazonaws.com/dev/jobs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private httpClient: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.httpClient
      .get<Job[]>(urlApi)
      .pipe(retry(2), catchError(this.handleError));
  }

  getJobById(id: string): Observable<Job> {
    const url = `${urlApi}/${id}`;
    return this.httpClient.get<Job>(url).pipe(
      tap((_) => console.log(`leu o produto id=${id}`)),
      catchError(this.handleError)
    );
  }

  saveJob(job: Job): Observable<Job> {
    return this.httpClient
      .post<Job>(urlApi, JSON.stringify(job), httpOptions)
      .pipe(
        tap((job: Job) => console.log(`adicionou o job com w/ id=${job}`)),
        catchError(this.handleError)
      );
  }

  updateJob(job: Job): Observable<Job> {
    const url = `${urlApi}/${job.id}`;
    return this.httpClient
      .patch<Job>(url, JSON.stringify(job), httpOptions)
      .pipe(
        tap((_) => console.log(`atualiza job com id=${job.id}`)),
        catchError(this.handleError)
      );
  }

  deleteJob(job: Job): Observable<Job> {
    const url = `${urlApi}/${job.id}`;
    return this.httpClient.delete<Job>(url, httpOptions).pipe(
      tap((_) => console.log(`remove o job o id=${job.id}`)),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage =
        `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
