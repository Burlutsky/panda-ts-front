import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Planet} from "../../../models/planet";
import {ActivatedRoute, Router} from "@angular/router";
import {PlanetService} from "../../../services/planet.service";

@Component({
  selector: 'app-planets-form',
  templateUrl: './planets-form.component.html',
  styleUrls: ['./planets-form.component.sass']
})
export class PlanetsFormComponent implements OnInit {

  form: FormGroup;

  id: number;

  planet: Planet;

  constructor(
    private planetService: PlanetService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.planet = {
      id: 0,
      name: '',
      rotation_period: '',
      orbital_period: '',
      diameter: '',
      climate: '',
      gravity: '',
      terrain: '',
      surface_water: '',
      population: '',
      people: [],
      films: [],
      created: '',
      edited: '',
      url: '',
    }
  }

  ngOnInit(): void {
  }

}
