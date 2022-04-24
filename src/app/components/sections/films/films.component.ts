import { Component, OnInit } from '@angular/core';
import {FilmService} from "../../../services/film.service";
import {Film} from "../../../models/film";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.sass']
})
export class FilmsComponent implements OnInit {
  films: Film[]

  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit(): void {
    this.getFilms();
  }

  private getFilms() {
    this.filmService.getFilms().subscribe((data: Film[]) => {
      this.films = data;
    })
  }
}
