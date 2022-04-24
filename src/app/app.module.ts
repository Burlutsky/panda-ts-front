import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { SectionsComponent } from './components/sections/sections.component';
import { SectionFormComponent } from './components/section-form/section-form.component';
import { PeopleComponent } from './components/sections/people/people.component';
import { PlanetsComponent } from './components/sections/planets/planets.component';
import { FilmsComponent } from './components/sections/films/films.component';
import { SpeciesComponent } from './components/sections/species/species.component';
import { VehiclesComponent } from './components/sections/vehicles/vehicles.component';
import { StarshipsComponent } from './components/sections/starships/starships.component';
import { PeopleFormComponent } from './components/sections/people-form/people-form.component';
import { PlanetsFormComponent } from './components/sections/planets-form/planets-form.component';
import { FilmsFormComponent } from './components/sections/films-form/films-form.component';
import { SpeciesFormComponent } from './components/sections/species-form/species-form.component';
import { VehiclesFormComponent } from './components/sections/vehicles-form/vehicles-form.component';
import { StarshipsFormComponent } from './components/sections/starships-form/starships-form.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionsComponent,
    SectionFormComponent,
    PeopleComponent,
    PlanetsComponent,
    FilmsComponent,
    SpeciesComponent,
    VehiclesComponent,
    StarshipsComponent,
    PeopleFormComponent,
    PlanetsFormComponent,
    FilmsFormComponent,
    SpeciesFormComponent,
    VehiclesFormComponent,
    StarshipsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
