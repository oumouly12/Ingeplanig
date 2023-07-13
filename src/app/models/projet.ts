import { Time } from "@angular/common";

export interface Projet {
    nom_projet : string ,
    data_create : Date,
    debut_projet: Date,
    fin_projet:Date;
    heure_ouverture: Date
    heure_fermeture: Date
}
export interface Details {
    nom_projet : string ,
   data_create : Date,
   id_tache :number,
   nom_tache: string,
   id_geom: number,
   debut_tache: Date,
   fin_tache: Date,
   libelle : string,
   geometrie : any,
   debut_projet: Date,
   fin_projet:Date;
   heure_ouverture: Time
   heure_fermeture: Time
}
