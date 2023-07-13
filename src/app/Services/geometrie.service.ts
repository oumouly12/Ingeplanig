import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Geometrie } from '../models/geometrie';
import { Taches } from '../models/taches';
@Injectable({
  providedIn: 'root'
})
export class GeometrieService {

  constructor(private hhtpclient:HttpClient) { }

  baseurl ="http://localhost:5171/api/Geometries";

  
  
  GetGeometrie() : Observable<Geometrie[]> {
   return this.hhtpclient.get<Geometrie[]>(this.baseurl)
  }

  
  

}
