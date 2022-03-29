import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { NotFoundComponent } from './not-found/not-found.component';
import { PoliticsComponent } from './politics/politics.component';
import { PoliticComponent } from './politics/politic/politic.component';
import { PeopleComponent } from './politics/politic/people/people.component';
import { LoginService } from './services/login.service';
import { AdminGuardService } from './politics/admin-guard.service';
import { NotAuthComponent } from './not-found/not-auth/not-auth.component';
import { CanDeactivateGuardService } from './parteien/add-parei/can-deactivate-guard.service';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserRformComponent } from './user-rform/user-rform.component';
import { politicsShortenPipe } from './politics/politicsShorten.pipe';
import { PeopleFilterPipe } from './politics/politic/people/people-filter.pipe';
import { ParteienFilterPipe } from './parteien/parteien-filter.pipe';
import { CnjokesComponent } from './cnjokes/cnjokes.component';
import { HttpClientModule } from '@angular/common/http';


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
    ViewParteiComponent,
    NotFoundComponent,
    PoliticsComponent,
    PoliticComponent,
    PeopleComponent,
    NotAuthComponent,
    ObservableDemoComponent,
    UserFormComponent,
    UserRformComponent,
    politicsShortenPipe,
    PeopleFilterPipe,
    ParteienFilterPipe,
    CnjokesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [LoggingService, ParteiDataService, LoginService, AdminGuardService, CanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
