import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {ResponseHttp} from "../models/responseHttp";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Specie} from "../models/specie";

@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  constructor(
    private http: HttpClient
  ) { }

  getSpecies(): Observable<Specie[]> {
    return this.http.get<ResponseHttp>(environment.apiUrl + 'api/species').pipe(
      map((data) => {
        return data.data.items;
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }

  getSpecie(id: number): Observable<Specie> {
    return this.http.get<ResponseHttp>(environment.apiUrl + 'api/species/' + id).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }

  storeSpecie(specie: Specie): Observable<Specie> {
    return this.http.post<ResponseHttp>(environment.apiUrl + 'api/species' + specie.id, specie).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(error);
      })
    )
  }

  updateSpecie(specie: Specie): Observable<Specie> {
    return this.http.post<ResponseHttp>(environment.apiUrl + 'api/species/' + specie.id, specie).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(error);
      })
    )
  }
}
