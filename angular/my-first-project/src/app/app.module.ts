import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParteiComponent } from './partei/partei.component';
import { ParteienComponent } from './parteien/parteien.component';
import { DownloaderComponent } from './downloader/downloader.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ShowhintsComponent } from './showhints/showhints.component';
import { AddPareiComponent } from './parteien/add-parei/add-parei.component';


@NgModule({
  declarations: [
    AppComponent,
    ParteiComponent,
    ParteienComponent,
    DownloaderComponent,
    UserinfoComponent,
    ShowhintsComponent,
    AddPareiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
