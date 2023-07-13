import { Component , AfterViewInit } from '@angular/core';
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import ZoomToExtent from "ol/control/ZoomToExtent";
import VectorSource from "ol/source/Vector";
import Vector from "ol/layer/Vector";
import { Fill, Stroke, Style } from "ol/style";
 import Polygon from "ol/geom/Polygon";
import Feature from "ol/Feature";
import olLayerVector from 'ol/layer/Vector';
import { GeometrieService } from '../Services/geometrie.service';
import { Geometrie } from '../models/geometrie';
import * as L from 'leaflet';
import { DatasService } from '../Services/datas.service';
import { GeoJSON } from 'leaflet';
import { LineString } from 'ol/geom';
import { Projet,Details } from '../models/projet';
import { ProjetService } from '../Services/projet.service';
import { AppComponent } from '../app.component';
import { Router,NavigationExtras } from '@angular/router';
import { TacheDetails } from '../models/taches';
import { TacheService } from '../Services/tache.service';
@Component({
  selector: 'app-maptache',
  templateUrl: './maptache.component.html',
  styleUrls: ['./maptache.component.css']
})
export class MaptacheComponent implements AfterViewInit{
 
  private map: any
  geom : any
  tab  : any[] = []
  geometries : Geometrie []=[]
  projets : any
  test?:TacheDetails
  tabgeom :any []=[]
  projet :Projet={
   nom_projet : '' ,
   data_create : new Date,
   debut_projet: new Date,
   fin_projet:new Date,
   heure_ouverture:new Date,
   heure_fermeture: new Date,
  }
  tache?:any
  isSidenavContentVisible = false;
  nom?:number
  ouverture?:any
  fermeture?:any 
  showFiller = false ;

  nom_projet?:string
  startDate?: Date;
  endDate?: Date;
  dates?: Date[];
  mysidenav=document.getElementById("mySidenav")
  lineStringArray = []
  mySidenav=document.getElementById
  constructor ( private tacheservice :TacheService,private router:Router ,private projetservice : ProjetService, private appc :AppComponent ){
   
    
    
    const navigation = this.router.getCurrentNavigation();
   const state = navigation?.extras.state as {
     choix : number 

   };
   this.nom=state.choix
  //  console.log('choix',this.nom) 
  }
  
  
  
  ngAfterViewInit(): void {
   const state = this.router.getCurrentNavigation()?.extras.state as { choix: number};

   if (state) {
     this.nom = state.choix;
    //  console.log('choix', this.nom);
 }
  
   
  //  console.log('dygfyzy'+this.nom)
   if(this.nom !=null)
   {
       
     
      this.tacheservice.Tache(this.nom).subscribe(response =>{
      const details=JSON.parse(JSON.stringify(response))
      
      const debut= details[0].debut_tache
      const fin =details[0].fin_tache
      this.geom=JSON.parse(details[0].geom)
      this.nom_projet=details[0].nom_projet
      if (debut && fin) {
        this.dates = this.getDatesBetween(new Date(debut), new Date(fin));
      }
 

      if(this.nom_projet !=null)
        this.projetservice.ProjetDetails(this.nom_projet).subscribe(response=>{
          console.log('response',response)
        this.ouverture = response[0].heure_ouverture;
        this.fermeture=response[0].heure_fermeture
    

          this.projets =JSON.parse(JSON.stringify(response))
      
          // const test =this.projet[0].heure_fermeture
          
          this.projets.forEach((element: Details) => {
            
          });
          console.log('res ',response)

        })
    this.initMap();
    this.initStatesLayer();
    
    });
     
    
   }
}

  
initMap(): void {
   this.map = L.map('map', {
     center: [43.738347784533, 7.424450755119324],
     zoom: 10
   });

   const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 23,
     minZoom: 1,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
   });

   tiles.addTo(this.map);

 
}

 private highlightFeature(e : any) {
   const layer = e.target;
 
   layer.setStyle({
     weight: 10,
     opacity: 1.0,
     color: '#DFA612',
     fillOpacity: 1.0,
     fillColor: '#FAE042'
   });
 }
 
 private resetFeature(e : any) {
   const layer = e.target;
 
   layer.setStyle({
     weight: 3,
     opacity: 0.5,
     color: '#008f68',
     fillOpacity: 0.8,
     fillColor: '#6DB65B'
   });
 }
   initStatesLayer() {
  const stateLayer = L.geoJSON(this.geom, {
       style: (feature) => ({
       weight: 3,
       opacity: 1,
       color: 'blue',
       fillOpacity: 0.8,
       fillColor: 'blue'
     }),
     onEachFeature: (feature, layer) => (
       layer.on({
         mouseover: (e) => (this.highlightFeature(e)),
         mouseout: (e) => (this.resetFeature(e)),
       })
     )
       });
  
  this.map.addLayer(stateLayer)
  
 }
 getDatesBetween(startDate: Date, endDate: Date): Date[] {
  const dates = [];
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}
openNav() {
  const mySidenav = document.getElementById("mySidenav");
  if (mySidenav !== null) {
  mySidenav.style.width = "250px";
}
}

 closeNav() {
  const mySidenav = document.getElementById("mySidenav");
  if (mySidenav !== null) {
    mySidenav.style.width = "0";
  }
}


 selected(item: number) {
 
  
   this.projetservice.setMapInitialized(false);
   const navigationExtras: NavigationExtras = {
     state: {     
        choix:item
     },
     queryParams: { reload: true } 
   }
    this.router.navigateByUrl('/', { skipLocationChange: true }) 
    .then(() => this.router.navigate(['/maptache'], navigationExtras))
    .then(() => this.openNav());
    const mySidenav = document.getElementById("mySidenav");
    if (mySidenav !== null) {
    mySidenav.style.width = "250px";
  }
   
   
}

// selectedtache(item:number){
//   this.Selected(item)
//   this.openNav()
  
// }
   }
 
