import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MapplanifComponent } from './mapplanif/mapplanif.component';
import {HttpClientModule } from '@angular/common/http';
// import { ListtaskComponent } from './listtask/listtask.component';
// import { ShapezipComponent } from './shapezip/shapezip.component';

import { FilegeomComponent } from './filegeom/filegeom.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//ajouter
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule } from '@angular/material/divider';
import { DatePipe } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { FileexcelComponent } from './fileexcel/fileexcel.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { NewprojetComponent } from './newprojet/newprojet.component';
import { MaptacheComponent } from './maptache/maptache.component'


@NgModule({

  declarations: [
    AppComponent,
  
    MapplanifComponent,
      //  ListtaskComponent,
      //  ShapezipComponent,
     
       FilegeomComponent,
         
         
             FileexcelComponent,
             NewprojetComponent,
             MaptacheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//ajouter
    FormsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    CommonModule,
    DatePipe
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
