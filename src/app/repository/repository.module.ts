import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
// import { PushNotificationsModule } from 'angular2-notifications';
import { TooltipModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from '../app.component';
import { RepositoryComponent } from './repository.component';
import { RepositoryService } from './repository.service';
@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    // PushNotificationsModule,
    HttpModule,
    TooltipModule,
    FormsModule
  ],
  declarations: [RepositoryComponent],
 })
export class RepositoryModule { }
