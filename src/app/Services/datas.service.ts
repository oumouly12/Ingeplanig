import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  constructor( private http : HttpClient) { }
  getDatas(){
    return this.http.get('/assets/data.json');
  }
}
