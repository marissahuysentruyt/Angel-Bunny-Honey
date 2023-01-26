import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HoneyFormService {
  private api = "https://formspree.io/f/xleaanww";

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message)
    return throwError(() => new Error('Something went wrong, please try again.'))
  }

  sendEmail(input: any) {
    return this.http.post(this.api, input, { responseType: 'text'})
      .pipe(
        map((response) => {
            return response;
        }),
        catchError(this.handleError)
      )
  }
}
