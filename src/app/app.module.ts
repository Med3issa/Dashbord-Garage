import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { TaxeComponent } from './components/doc/taxe/taxe.component';
import { AssuranceComponent } from './components/doc/assurance/assurance.component';
import { VisiteComponent } from './components/doc/visite/visite.component';
import { LeasingComponent } from './components/doc/leasing/leasing.component';
import { BarComponent } from './components/bar/bar.component';
import { HomeComponent } from './components/home/home.component';
import { BoujieComponent } from './components/cur/boujie/boujie.component';
import { PneuComponent } from './components/cur/pneu/pneu.component';
import { ChaineComponent } from './components/cur/chaine/chaine.component';
import { VidangeFiltreComponent } from './components/cur/vidange-filtre/vidange-filtre.component';
import { EntretienComponent } from './components/entretien/entretien.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddCarComponent } from './components/add-car/add-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    TaxeComponent,
    AssuranceComponent,
    VisiteComponent,
    LeasingComponent,
    BarComponent,
    HomeComponent,
    BoujieComponent,
    PneuComponent,
    ChaineComponent,
    VidangeFiltreComponent,
    EntretienComponent,
    UsersComponent,
    AddUserComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
