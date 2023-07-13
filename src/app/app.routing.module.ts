import { NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { MapplanifComponent } from './mapplanif/mapplanif.component';
import { FilegeomComponent } from './filegeom/filegeom.component';

import { FileexcelComponent } from './fileexcel/fileexcel.component';
import { NewprojetComponent } from './newprojet/newprojet.component';
import { MaptacheComponent } from './maptache/maptache.component';

export const routes= [
  {
    path:"mapplanif", component: MapplanifComponent , label: 'map'
  },
  
{
  path:'fileexcel',component:FileexcelComponent ,label:'Creer un nouveau projet'
},
{
  path:'maptache',component:MaptacheComponent ,label:'tache'
}




 
];
const routerOptions: ExtraOptions = 
{ onSameUrlNavigation: 'reload' }; 

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
