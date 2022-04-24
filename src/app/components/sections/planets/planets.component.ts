import { Component, OnInit } from '@angular/core';
import {Planet} from "../../../models/planet";
import {PlanetService} from "../../../services/planet.service";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.sass']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[];

  constructor(
    private planetService: PlanetService
  ) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  private getPlanets() {
    this.planetService.getPlanets().subscribe((data: Planet[]) => {
      this.planets = data;
    })
  }
}
