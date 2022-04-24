import { Component, OnInit } from '@angular/core';
import {Specie} from "../../../models/specie";
import {SpecieService} from "../../../services/specie.service";
import {Planet} from "../../../models/planet";

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.sass']
})
export class SpeciesComponent implements OnInit {
  species: Specie[];

  constructor(
    private specieService: SpecieService
  ) { }

  ngOnInit(): void {
    this.getSpecies();
  }

  private getSpecies() {
    this.specieService.getSpecies().subscribe((data: Specie[]) => {
      this.species = data;
    })
  }
}
