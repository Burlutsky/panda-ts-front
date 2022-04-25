import { Injectable } from '@angular/core';
import {People} from "../models/people";
import {ResponseHttp} from "../models/responseHttp";
import {Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {map, catchError} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private http: HttpClient
  ) { }

  getPeople(): Observable<People[]> {
    return this.http.get<ResponseHttp>(environment.apiUrl + 'api/people').pipe(
      map((data) => {
        return data.data.items;
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }

  getPerson(id: number): Observable<People> {
    return this.http.get<ResponseHttp>(environment.apiUrl + 'api/people/' + id).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }

  storePerson(person: People): Observable<People> {
    return this.http.post<ResponseHttp>(environment.apiUrl + 'api/people', person).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(error);
      })
    )
  }

  updatePerson(person: People) {
    return this.http.put<ResponseHttp>(environment.apiUrl + 'api/people/' + person.id, person).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(error);
      })
    )
  }
}
