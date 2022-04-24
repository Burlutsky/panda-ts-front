import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {ResponseHttp} from "../models/responseHttp";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {Planet} from "../models/planet";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(
    private http: HttpClient
  ) { }

  getPlanets(): Observable<Planet[]> {
    return this.http.get<ResponseHttp>(environment.apiUrl + 'api/planets').pipe(
      map((data) => {
        return data.data.items;
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }

  getPlanet(id: number): Observable<Planet> {
    return this.http.get<ResponseHttp>(environment.apiUrl + 'api/planets/' + id).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }
}
