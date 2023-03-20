import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentBodyComponent } from './content-body/content-body.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    ContentBodyComponent,
    HeaderComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentBodyComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
