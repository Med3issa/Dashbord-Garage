import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TaxeComponent } from './components/doc/taxe/taxe.component';
import { VisiteComponent } from './components/doc/visite/visite.component';
import { AssuranceComponent } from './components/doc/assurance/assurance.component';
import { LeasingComponent } from './components/doc/leasing/leasing.component';
import { CarsComponent } from './components/cars/cars.component';
import { BoujieComponent } from './components/cur/boujie/boujie.component';
import { PneuComponent } from './components/cur/pneu/pneu.component';
import { ChaineComponent } from './components/cur/chaine/chaine.component';
import { VidangeFiltreComponent } from './components/cur/vidange-filtre/vidange-filtre.component';
import { EntretienComponent } from './components/entretien/entretien.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddCarComponent } from './components/add-car/add-car.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'doc/taxe',
    component:TaxeComponent
  },
  {
    path:'doc/visite',
    component:VisiteComponent
  },
  {
    path:'doc/assurance',
    component:AssuranceComponent
  },
  {
    path:'doc/leasing',
    component:LeasingComponent
  },
  {
    path:'cars',
    component:CarsComponent
  },
  {
    path:'cur/boujie',
    component:BoujieComponent
  },
  {
    path:'cur/pneu',
    component:PneuComponent
  },
  {
    path:'cur/chaine',
    component:ChaineComponent
  },
  {
    path:'cur/vidange',
    component:VidangeFiltreComponent
  },
  {
    path:'entretien',
    component:EntretienComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'add-user',
    component:AddUserComponent
  },
  {
    path:'add-car',
    component:AddCarComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
