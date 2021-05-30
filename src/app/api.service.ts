import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/api/fixes/';

  private fspids = ['0000a', '0000b', '0000c', '0000d', '0000e', '0000f'];

  constructor(
    private httpclient : HttpClient
  ) { }

  getFspids() {
    return this.httpclient.get<Array<any>>(this.baseUrl);
    
  }
  
}
