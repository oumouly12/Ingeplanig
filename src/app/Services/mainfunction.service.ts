// import { Injectable } from '@angular/core';
// import { Component, AfterViewInit } from '@angular/core';
// import Map from "ol/Map";
// import View from "ol/View";
// import TileLayer from "ol/layer/Tile";
// import XYZ from "ol/source/XYZ";
// // import ZoomToExtent from "ol/control/ZoomToExtent";
// import VectorSource from "ol/source/Vector";
// import Vector from "ol/layer/Vector";
// import { Fill, Stroke, Style } from "ol/style";
//  import Polygon from "ol/geom/Polygon";
// import Feature from "ol/Feature";
// import olLayerVector from 'ol/layer/Vector';
// import { GeometrieService } from '../Services/geometrie.service';
// import { Geometrie } from '../models/geometrie';
// import * as L from 'leaflet';
// import { DatasService } from '../Services/datas.service';
// import { GeoJSON } from 'leaflet';
// import { LineString } from 'ol/geom';
// import { Projet,Details } from '../models/projet';
// import { ProjetService } from '../Services/projet.service';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class MainfunctionService {
//   private map: any
//   geom : any
//   tab  : any[] = []
//   geometries : Geometrie []=[]
//   projets : Details[]=[]
//   tabgeom :any []=[]
     
//   lineStringArray = []
//   constructor ( private projetservice : ProjetService , private router : Router ){}

  
//   OpenProjet(nom_projet:string):void {
  
//     this.ngAfterViewInit(nom_projet)
//   }
//     initMap(): void {
//     this.map = L.map('map', {
//       center: [43.738347784533, 7.424450755119324],
//       zoom: 10
//     });

//     const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       maxZoom: 23,
//       minZoom: 1,
//       attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//     });

//     tiles.addTo(this.map);
  
    
//   }
//   private highlightFeature(e : any) {
//     const layer = e.target;
  
//     layer.setStyle({
//       weight: 10,
//       opacity: 1.0,
//       color: '#DFA612',
//       fillOpacity: 1.0,
//       fillColor: '#FAE042'
//     });
//   }
  
//   private resetFeature(e : any) {
//     const layer = e.target;
  
//     layer.setStyle({
//       weight: 3,
//       opacity: 0.5,
//       color: '#008f68',
//       fillOpacity: 0.8,
//       fillColor: '#6DB65B'
//     });
//   }
  


//    initStatesLayer() {
//     const stateLayer = L.geoJSON(this.tabgeom, {
//       style: (feature) => ({
//         weight: 3,
//         opacity: 1,
//         color: 'blue',
//         fillOpacity: 0.8,
//         fillColor: 'blue'
//       }),
//       onEachFeature: (feature, layer) => (
//         layer.on({
//           mouseover: (e) => (this.highlightFeature(e)),
//           mouseout: (e) => (this.resetFeature(e)),
//         })
//       )
      
//     });

     
//    this.map.addLayer(stateLayer);
   

        
//   }
 
 
//   ngAfterViewInit(nom :string): void {
//     this.initMap();
    
//       this.projetservice.ProjetDetails(nom).subscribe(response =>{
//         console.log(response)
//         const geom=response.map(item => item.geometrie)
//         const parsedGeom = JSON.parse('['+geom+']') //pour le transformer json valide
//         this.projets=parsedGeom
//         this.tabgeom=this.projets

//         this.projets=response
//         this.projets.forEach(item =>{
//           item.geometrie=JSON.parse('['+ item.geometrie+']')
          
//         })
//        this.tab= this.projets
//         console.log("eeeeeeeee", this.tab);
//         this.initStatesLayer();
        
//      });
//      this.router.navigate(['/mapplanif']);
   
//        }
     
//     }
  


