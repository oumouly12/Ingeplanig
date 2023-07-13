import { Component , VERSION , OnInit, AfterViewInit, } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-filegeom',
  templateUrl: './filegeom.component.html',
  styleUrls: ['./filegeom.component.css']
})
export class FilegeomComponent implements OnInit, AfterViewInit {

  // file : any = '';


  // readDocument(e: any) {
  //   const file =  e.target.files[0];
  //   let fileReader = new FileReader();
  //   fileReader.onload = (e) => {
  //     this.file = fileReader.result;
      
  //   }
  //   fileReader.readAsText(file);
  // }

mapId : string ='';
map : any;
 id ?: number ;
 ngOnInit() {
  this.mapId = "map" + this.id;
}

initMap(): void {
  this.map = L.map(this.mapId, {
    center: [43.34, 5.81],
    zoom: 10,
    attributionControl: false
  });

  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });

  tiles.addTo(this.map);

}
ngAfterViewInit(): void {
  this.initMap();
}



}


