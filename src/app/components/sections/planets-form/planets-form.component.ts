import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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

    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getPlanet();

    this.form = new FormGroup({
      name: new FormControl(this.planet.name,[Validators.required]),
      rotation_period: new FormControl(this.planet.rotation_period,[Validators.required]),
      orbital_period: new FormControl(this.planet.orbital_period,[Validators.required]),
      diameter: new FormControl(this.planet.diameter,[Validators.required]),
      climate: new FormControl(this.planet.climate,[Validators.required]),
      gravity: new FormControl(this.planet.gravity,[Validators.required]),
      terrain: new FormControl(this.planet.terrain,[Validators.required]),
      surface_water: new FormControl(this.planet.surface_water,[Validators.required]),
      population: new FormControl(this.planet.population,[Validators.required]),
      films: new FormControl(this.planet.films,[Validators.required]),
      created: new FormControl(this.planet.created,[Validators.required]),
      edited: new FormControl(this.planet.edited,[Validators.required]),
      url: new FormControl(this.planet.url,[Validators.required]),
    });
  }

  private getPlanet() {
    if (this.id) {
      this.planetService.getPlanet(this.id).subscribe((data)=> {
        if (data) {
          this.planet = data;
          this.form.patchValue(this.planet);
        }
      });
    }
  }

  get f() {return this.form.controls}

  onSubmit() {

  }
}
