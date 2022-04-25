import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {ResponseHttp} from "../models/responseHttp";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {Starship} from "../models/starship";

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor(
    private http: HttpClient
  ) { }

  getStarships(): Observable<Starship[]> {
    return this.http.get<ResponseHttp>(environment.apiUrl + 'api/starships').pipe(
      map((data) => {
        return data.data.items;
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }

  getStarship(id: number): Observable<Starship> {
    return this.http.get<ResponseHttp>(environment.apiUrl + 'api/starships/' + id).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }



  storeStarship(starship: Starship): Observable<Starship> {
    return this.http.post<ResponseHttp>(environment.apiUrl + 'api/starships', starship).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(error);
      })
    )
  }

  updateStarship(starship: Starship) {
    return this.http.put<ResponseHttp>(environment.apiUrl + 'api/starships/' + starship.id, starship).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(error);
      })
    )
  }
}
