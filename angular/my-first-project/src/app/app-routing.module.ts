import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloaderComponent } from './downloader/downloader.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParteiComponent } from './partei/partei.component';
import { AddPareiComponent } from './parteien/add-parei/add-parei.component';
import { ParteienComponent } from './parteien/parteien.component';
import { RouteTesterComponent } from './route-tester/route-tester.component';
import { ViewParteiComponent } from './view-partei/view-partei.component';

const routes: Routes = [
  {path:'', component: ParteienComponent},
  {path:'download', component: DownloaderComponent, children:[
    {path:'test', component: DownloaderComponent},
  ]
  },
  // {path:'download/test', component: DownloaderComponent},
  {path:'parteilist', component: ParteienComponent},
  {path:'addpartai', component: AddPareiComponent},
  {path:'viewpartei/:id', component: ViewParteiComponent},
  {path:'viewpartei', redirectTo:'/parteilist'},
  {path:'404-not-found', component:NotFoundComponent},
  {path:'**', redirectTo:'/404-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
