import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_path = 'http://api.mathjs.org/v4';
  constructor(private http: HttpClient) { }



  calculaMedias(params) {
    let string = "?expr=sum(" + params + ") / " + params.length
    return new Promise(resolve => {

      this.http.get(this.base_path + string, { responseType: 'json' }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
