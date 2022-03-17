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
import { ParteiListComponent } from './partei/partei-list/partei-list.component';
import { CandidateListComponent } from './partei/candidate-list/candidate-list.component';
import { PartaiAccListComponent } from './parteien/partai-acc-list/partai-acc-list.component';
import { FirstDirective } from './first-directive/app-first-directive';
import { SecondDirectiveDirective } from './second-directive/second-directive.directive';
import { SecondDir2Directive } from './second-directive/second-dir2.directive';
import { StructuralDirective } from './structural.directive';
import { LoggingService } from 'src/app/services/logging.service';
import { RouterModule, Routes } from '@angular/router';
import { ParteiDataService } from './services/parteiData.service';
import { RouteTesterComponent } from './route-tester/route-tester.component';
import { ViewParteiComponent } from './view-partei/view-partei.component';


@NgModule({
  declarations: [
    AppComponent,
    ParteiComponent,
    ParteienComponent,
    DownloaderComponent,
    UserinfoComponent,
    ShowhintsComponent,
    AddPareiComponent,
    ParteiListComponent,
    CandidateListComponent,
    PartaiAccListComponent,
    FirstDirective,
    SecondDirectiveDirective,
    SecondDir2Directive,
    StructuralDirective,
    RouteTesterComponent,
    ViewParteiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [LoggingService, ParteiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
