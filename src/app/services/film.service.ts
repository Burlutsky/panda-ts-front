import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {ResponseHttp} from "../models/responseHttp";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Film} from "../models/film";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(
    private http: HttpClient
  ) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<ResponseHttp>(environment.apiUrl + 'api/films').pipe(
      map((data) => {
        return data.data.items;
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }

  getFilm(id: number): Observable<Film> {
    return this.http.get<ResponseHttp>(environment.apiUrl + 'api/films/' + id).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }

  storeFilm(film: Film): Observable<Film> {
    return this.http.post<ResponseHttp>(environment.apiUrl + 'api/films', film).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(error);
      })
    )
  }

  updateFilm(film: Film) {
    return this.http.put<ResponseHttp>(environment.apiUrl + 'api/films/' + film.id, film).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(error);
      })
    )
  }
}
