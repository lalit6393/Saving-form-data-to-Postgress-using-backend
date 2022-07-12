import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntroService {

  requestOptions = {
    headers: new HttpHeaders().append('Content-Type', 'application/json')
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  url = environment.BACKEND_URL;


  getIntroduction() {
    return this.http.get(this.url + '/intro', this.requestOptions);
  }

  getDemo() {
    return this.http.get(this.url + '/demo', this.requestOptions);
  }

  //change only 3 lines
  saveToDB(data:any) {
    return this.http.post(this.url + '/save-form', { data }, this.requestOptions);
  }
}
