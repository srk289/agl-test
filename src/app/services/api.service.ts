import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base = 'http://agl-developer-test.azurewebsites.net/';
  constructor(private httpClient: HttpClient) {}

  get(url) {
   return this.httpClient.get(this.base + url);
  }
  // post
  // delete etc
}
