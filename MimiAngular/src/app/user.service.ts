import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

import { User } from './user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private snackBar: MatSnackBar) { }
  private url = 'http://localhost:8081/api/user/signup';

  Signup (user: User): Observable<any> {
    return this.http.post<string>(this.url, user, httpOptions).pipe(
      catchError(this.handleError<any>('Signup', {"ret":""}))
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      //console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //return error
      console.error(error)
      result['ret']= error.error.message
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
