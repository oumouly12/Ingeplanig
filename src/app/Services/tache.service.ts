import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Taches , TacheDetails} from '../models/taches';
import { Observable } from 'rxjs';
import { TachePost } from '../models/tachespost';
@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private hhtpclient:HttpClient) { }

  baseurl ="http://localhost:5171/api/Taches";

  urlpost="http://localhost:5171/api/Taches/api/Taches/SaveTachesAffaire";
  detailtache = "http://localhost:5171/api/Taches/api/Taches/GetTachesAffaireById";
  
  GetTaches() : Observable<Taches[]> {
   return this.hhtpclient.get<Taches[]>(this.baseurl)
  }
  PostTache(tache :TachePost[]) : Observable<TachePost[]> {
    
    return this.hhtpclient.post<TachePost[]>(this.urlpost , tache );

  }
  Tache(id:number): Observable<TacheDetails>{
    return this.hhtpclient.get<TacheDetails>(this.detailtache+'/'+id);
  }
  
}
