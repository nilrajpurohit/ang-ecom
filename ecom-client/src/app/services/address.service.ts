import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(private _http:HttpClient) { }
  baseUrl:string='http://localhost:2000';

  getCountries():Observable<any[]>{
    return this._http.get<any[]>(this.baseUrl+'/country').pipe(catchError(this.errorHandler));
  }

  getStatesByCountryId(id:any):Observable<any[]>{
    return this._http.get<any[]>(this.baseUrl+'/state/country/'+id).pipe(catchError(this.errorHandler));
  }

  getCitiesByStateId(id:any):Observable<any[]>{
    return this._http.get<any[]>(this.baseUrl+'/city/state/'+id).pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error.message || "Error occur in address service!");
  }
}
