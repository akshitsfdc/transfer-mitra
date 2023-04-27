import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [   
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
   exports: [  
    MatToolbarModule,
    MatIconModule,
    MatButtonModule 
  ]
})
export class MaterialModule { }
