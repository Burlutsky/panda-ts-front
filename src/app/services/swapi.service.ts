import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class SwapiService {
  constructor(private http: HttpClient) { }

}
