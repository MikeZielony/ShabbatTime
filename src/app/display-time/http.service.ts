import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  getData(geoNameId: number): Observable<any> {
    const url = `https://www.hebcal.com/shabbat?cfg=json&geonameid=${geoNameId}&M=on&a=on&M=on&`;
    return this.http.get<any>(url)
      .pipe(catchError(this.handleError));
  }
   handleError(error:any) {
    return throwError((error.message || 'Server Error' ));
 }

}
