import { Component  , AfterViewInit, OnInit} from '@angular/core';
import * as XLSX from 'xlsx';
import { GeometrieService } from '../Services/geometrie.service';
import {FormControl, NgForm} from '@angular/forms';
import { Taches } from '../models/taches';
import { FormGroup ,FormBuilder } from '@angular/forms';
import { TacheService } from '../Services/tache.service';
import { TachePost } from '../models/tachespost';
import { ProjetService } from '../Services/projet.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router,NavigationExtras  } from '@angular/router';



import { Projet } from '../models/projet';
import { TileCache } from 'ol';
@Component({
  selector: 'app-fileexcel',
  templateUrl: './fileexcel.component.html',
  styleUrls: ['./fileexcel.component.css']
})
export class FileexcelComponent implements AfterViewInit{
  toppings = new FormControl('');
  tabg : Taches[]=[];
  displayscolumns : string []=["nom" ,"nom_projet","date_debut","date_fin","geomid"  ]
  isformsubmitted = false;
  formtache = false;
  formVisible = true;
  routes= Router;
  nom_projet?: string


  title='Charger un fichier excel';
  // convertedJSON: TachePost []=[];
  convertedJSON :TachePost[]=[{
    nom :'',
    debut_tache : '',
    fin_tache :'',
    nom_projet:'',
    geomid :[]
  }]
  dataSource= new MatTableDataSource(this.convertedJSON);
  geom :any;

  addprojet : Projet={
    nom_projet:'',
    data_create : new Date,
    debut_projet: new Date,
    fin_projet:new Date,
    heure_ouverture: new Date,
    heure_fermeture:new  Date,
    
  };
// addtache: TachePost=
//   {
     
//     nom: '',
//     nom_projet: '',
//     date_debut:  new Date(),
//     date_fin: new Date(),
//     geomid :[]

// }

  constructor (private router : Router, private geometrieservice : GeometrieService , private tf : FormBuilder , private tachepostservice : TacheService , private  projetservice : ProjetService)  {
   
  }
 
  fileUpload(event : any) {
    console.log(event.target.files);
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event)=>{
      console.log(Object);
      let binaryData = event.target?.result;
      let workbook = XLSX.read(binaryData, {type:'binary', cellDates:true});
      workbook.SheetNames.forEach(sheet=>{
        const  data=XLSX.utils.sheet_to_json(workbook.Sheets[sheet])
        
        this.convertedJSON = JSON.parse(JSON.stringify(data));
        console.log('conexcel',this.convertedJSON);
        this.convertedJSON.forEach(tache => {
          console.log('type', typeof tache.debut_tache)

          tache.geomid = [];
        

        });
           })
      console.log(workbook);
      this.formtache= true
    }
   
      };
      onKey(event : any) {
        const inputValue = event.target.value;
        this.nom_projet =inputValue
      }

      addgeom (topping : any ,tache : any , nom_projet : string) : void{
        tache.geomid.push(topping)
        tache.nom_projet=this.addprojet.nom_projet
        // tache.nom_projet(this.nom_projet)
   
        console.log("gdtyee",tache)
        // console.log(topping)
      }

      ngAfterViewInit(): void {
        
          this.geometrieservice.GetGeometrie().subscribe(response =>{
          this.geom=response.map(item => item.id_geom)
          
         });
       
}
postprojet( ){
  console.log('addprojet',this.addprojet)
 
    this.projetservice.Postprojet(this.addprojet)
    .subscribe({
      next:(tache)=>{
        
       
      }
   
  });
  console.log('type projet debut ', typeof this.addprojet.debut_projet);
  this.isformsubmitted=true;
  this.nom_projet =this.addprojet.nom_projet
  console.log(this.addprojet.nom_projet)
  this.formVisible = true;

}
onSubmit (){
  
this.tachepostservice.PostTache(this.convertedJSON)
  .subscribe({
    next:(tache)=>{
      console.log('excel2',this.convertedJSON);
    }
    
  });
    const navigationExtras: NavigationExtras = {
    state: {     
       choix:this.nom_projet
    },
    queryParams: { reload: true } 
  }
 
   this.router.navigateByUrl('/', { skipLocationChange: true }) 
   .then(() => this.router.navigate(['/mapplanif'], navigationExtras));
 
  }
 
}

