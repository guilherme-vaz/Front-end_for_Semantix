import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';
import { User } from 'src/app/models/user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const urlApi =
  'https://tlko4ot709.execute-api.sa-east-1.amazonaws.com/dev/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}


  getUsers(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(urlApi)
      .pipe(retry(2), catchError(this.handleError));
  }

  getUserById(id: string): Observable<User> {
    const url = `${urlApi}/${id}`;
    return this.httpClient.get<User>(url).pipe(
      tap((_) => console.log(`leu o produto id=${id}`)),
      catchError(this.handleError)
    );
  }

  saveUser(user: User): Observable<User> {
    return this.httpClient
      .post<User>(urlApi, JSON.stringify(user), httpOptions)
      .pipe(
        tap((user: User) => console.log(`adicionou o user com w/ id=${user}`)),
        catchError(this.handleError)
      );
  }

  updateUser(user: User): Observable<User> {
    const url = `${urlApi}/${user.id}`;

    return this.httpClient
      .patch<User>(url, JSON.stringify(user), httpOptions)
      .pipe(
        tap((_) => console.log(`atualiza user com id=${user.id}`)),
        catchError(this.handleError)
      );
  }

  deleteUser(user: User): Observable<User> {
    const url = `${urlApi}/${user.id}`;
    return this.httpClient.delete<User>(url, httpOptions).pipe(
      tap((_) => console.log(`remove o user o id=${user.id}`)),
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
