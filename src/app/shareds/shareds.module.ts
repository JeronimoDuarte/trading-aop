import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudService } from './services/crud.service';
import { NotificationComponent } from './components/notification/notification.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    NotificationComponent
  ]
 
  
})
export class SharedsModule { }
