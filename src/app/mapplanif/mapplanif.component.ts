import { Component ,AfterViewInit, OnInit, Input} from '@angular/core';
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



 
@Component({
  selector: 'app-mapplanif',
  templateUrl: './mapplanif.component.html',
  styleUrls: ['./mapplanif.component.css']
})

export class MapplanifComponent implements AfterViewInit{
 
   private map: any
   geom : any
   tab  : any[] = []
   geometries : Geometrie []=[]
   projets : Details[]=[]
    tabgeom :any []=[]
    projet :Projet={
    nom_projet : '' ,
    data_create : new Date,
    debut_projet: new Date,
    fin_projet:new Date,
    heure_ouverture:new Date,
    heure_fermeture: new Date,
   }
 
   nom?:string

    constructor ( private router:Router ,private projetservice : ProjetService, private appc :AppComponent ){
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
    choix :string

    };
    this.nom=state.choix
    console.log('choix',this.nom) 
   }
   
   lineStringArray = []
  
   ngAfterViewInit(): void {
    const state = this.router.getCurrentNavigation()?.extras.state as { choix: string };

    if (state) {
      this.nom = state.choix;
      console.log('choix', this.nom);
  }
   
    
    console.log('dygfyzy'+this.nom)
    if(this.nom !=null)
    {
      this.projetservice.Projet(this.nom).subscribe(response =>{
        this.projet=response
      })
      
      this.projetservice.ProjetDetails(this.nom).subscribe(response =>{
     
        const geom=response.map(item => item.geometrie)
        const parsedGeom = JSON.parse('['+geom+']') //pour le transformer json valide
        this.projets=parsedGeom
        this.tabgeom=this.projets

        this.projets=response
        this.projets.forEach(item =>{
          item.geometrie=JSON.parse('['+ item.geometrie+']')
          
        })
        console.log('erft',this.projets)
       this.tab= this.projets
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
   const stateLayer = L.geoJSON(this.tabgeom, {
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
  Selected(item: number) {
  
    this.projetservice.setMapInitialized(false);
    const navigationExtras: NavigationExtras = {
      state: {     
         choix:item
      },
      queryParams: { reload: true } 
    }
     this.router.navigateByUrl('/', { skipLocationChange: true }) 
     .then(() => this.router.navigate(['/maptache'], navigationExtras));
    }
 
    }
  
