import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {ResponseHttp} from "../models/responseHttp";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Vehicle} from "../models/vehicle";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(
    private http: HttpClient
  ) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<ResponseHttp>(environment.apiUrl + 'api/vehicles').pipe(
      map((data) => {
        return data.data.items;
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }

  getVehicle(id: number): Observable<Vehicle> {
    return this.http.get<ResponseHttp>(environment.apiUrl + 'api/vehicles/' + id).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }

  storeVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<ResponseHttp>(environment.apiUrl + 'api/vehicles', vehicle).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(error);
      })
    )
  }

  updateVehicle(vehicle: Vehicle) {
    return this.http.put<ResponseHttp>(environment.apiUrl + 'api/vehicles/' + vehicle.id, vehicle).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(error);
      })
    )
  }
}
