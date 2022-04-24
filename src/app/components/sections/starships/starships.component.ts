import { Component, OnInit } from '@angular/core';
import {Starship} from "../../../models/starship";
import {StarshipService} from "../../../services/starship.service";
import {Vehicle} from "../../../models/vehicle";

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.sass']
})
export class StarshipsComponent implements OnInit {
  starships: Starship[]

  constructor(
    private starshipService: StarshipService
  ) { }

  ngOnInit(): void {
    this.getStarships();
  }

  private getStarships() {
    this.starshipService.getStarships().subscribe((data: Starship[]) => {
      this.starships = data;
    })
  }
}
