import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/pages/about/about.component';
import { ContectComponent } from './component/pages/contect/contect.component';
import { HomeComponent } from './component/pages/home/home.component';
import { ServiceComponent } from './component/pages/service/service.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "about", component: AboutComponent },
  { path: "service", component: ServiceComponent},
  { path: "contect", component: ContectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
