// import { Injectable } from '@angular/core';
// import {
//   HttpClient,
//   HttpErrorResponse,
// } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';
// import { User } from 'src/app/models/user';

// const urlApi =
//   'https://tlko4ot709.execute-api.sa-east-1.amazonaws.com/dev/users';

// @Injectable({
//   providedIn: 'root',
// })

// export class ViewService {
//   constructor(private httpClient: HttpClient) {}

//   //User by Id (Still need to implement)
//   getUserById(id: string): Observable<User> {
//     const url = `${urlApi}/${id}`;
//     return this.httpClient.get<User>(url).pipe(
//       tap((_) => console.log(`leu o produto id=${id}`)),
//       catchError(this.handleError)
//     );
//   }

//   // Manipulação de erros
//   handleError(error: HttpErrorResponse) {
//     let errorMessage = '';
//     if (error.error instanceof ErrorEvent) {
//       // Erro ocorreu no lado do client
//       errorMessage = error.error.message;
//     } else {
//       // Erro ocorreu no lado do servidor
//       errorMessage =
//         `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
//     }
//     console.log(errorMessage);
//     return throwError(errorMessage);
//   }
// }
