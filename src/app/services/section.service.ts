import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError } from "rxjs";
import {Section} from "../models/section";
import {ResponseHttp} from "../models/responseHttp";
import {environment} from "../../environments/environment";
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(
    private http: HttpClient
  ) { }

  getSections(): Observable<Section[]> {
    return this.http.get<ResponseHttp>(environment.apiUrl).pipe(
      map((data) => {
        return data.data.items;
      }),
      catchError((error) => {
        return throwError(error);
      })
    )
  }
}
