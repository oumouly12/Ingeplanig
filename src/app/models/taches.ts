export interface Taches {
    
    id_tache : number,
    nom : string,
    date_debut : Date,
    date_fin : Date,
    nom_projet : string,
    geomid : any


}
export interface TacheDetails{
  debut_tache :Date
  fin_tache :Date,
  geom :any
  id_tache :number,
  libelle:string,
  nom_tache:string,
  nom_projet:string,
  id_geom :number,
}