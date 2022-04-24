import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SectionsComponent} from "./components/sections/sections.component";
import {PeopleComponent} from "./components/sections/people/people.component";
import {PlanetsComponent} from "./components/sections/planets/planets.component";
import {FilmsComponent} from "./components/sections/films/films.component";
import {VehiclesComponent} from "./components/sections/vehicles/vehicles.component";
import {StarshipsComponent} from "./components/sections/starships/starships.component";
import {PeopleFormComponent} from "./components/sections/people-form/people-form.component";
import {PlanetsFormComponent} from "./components/sections/planets-form/planets-form.component";
import {FilmsFormComponent} from "./components/sections/films-form/films-form.component";
import {SpeciesFormComponent} from "./components/sections/species-form/species-form.component";
import {VehiclesFormComponent} from "./components/sections/vehicles-form/vehicles-form.component";
import {StarshipsFormComponent} from "./components/sections/starships-form/starships-form.component";
import {SpeciesComponent} from "./components/sections/species/species.component";

const routes: Routes = [
  {
    path: '',
    component: SectionsComponent
  },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'people/:id',
    component: PeopleFormComponent
  },
  {
    path: 'planets',
    component: PlanetsComponent
  },
  {
    path: 'planets/:id',
    component: PlanetsFormComponent
  },
  {
    path: 'films',
    component: FilmsComponent
  },
  {
    path: 'films/:id',
    component: FilmsFormComponent
  },
  {
    path: 'species',
    component: SpeciesComponent
  },
  {
    path: 'species/:id',
    component: SpeciesFormComponent
  },
  {
    path: 'vehicles',
    component: VehiclesComponent
  },
  {
    path: 'vehicles/:id',
    component: VehiclesFormComponent
  },
  {
    path: 'starships',
    component: StarshipsComponent
  },
  {
    path: 'starships/:id',
    component: StarshipsFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
