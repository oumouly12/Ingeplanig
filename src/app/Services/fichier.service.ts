import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fichier } from '../models/fichier';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FichierService {
 baseurl ='http://localhost:5171/api/Fichier';
  constructor( private httpget : HttpClient ) {}

  GetFichiers() : Observable<Fichier[]> {
    return this.httpget.get<Fichier[]>(this.baseurl)
   }
}
