import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FilmService} from "../../../services/film.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Film} from "../../../models/film";

@Component({
  selector: 'app-films-form',
  templateUrl: './films-form.component.html',
  styleUrls: ['./films-form.component.sass']
})
export class FilmsFormComponent implements OnInit {

  form: FormGroup;

  id: number;

  film: Film;

  constructor(
    private filmService: FilmService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    ) {
    this.film = {
      id: 0,
      title: '',
      episode_id: '',
      opening_crawl: '',
      director: '',
      producer: '',
      release_date: '',
      characters: '',
      planets: [],
      starships: [],
      vehicles: [],
      species: [],
      created: '',
      edited: '',
      url: ''
    }

    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getFilm();

    this.form = new FormGroup({
      title: new FormControl(this.film.title,[Validators.required]),
      episode_id: new FormControl(this.film.episode_id,[Validators.required]),
      opening_crawl: new FormControl(this.film.opening_crawl,[Validators.required]),
      director: new FormControl(this.film.director,[Validators.required]),
      producer: new FormControl(this.film.producer,[Validators.required]),
      release_date: new FormControl(this.film.release_date,[Validators.required]),
      characters: new FormControl(this.film.characters,[Validators.required]),
      planets: new FormControl(this.film.planets,[Validators.required]),
      starships: new FormControl(this.film.starships,[Validators.required]),
      vehicles: new FormControl(this.film.vehicles,[Validators.required]),
      species: new FormControl(this.film.species,[Validators.required]),
      created: new FormControl(this.film.created,[Validators.required]),
      edited: new FormControl(this.film.edited,[Validators.required]),
      url: new FormControl(this.film.url,[Validators.required]),
    });
  }

  private getFilm() {
    if (this.id) {
      this.filmService.getFilm(this.id).subscribe((data)=> {
        if (data) {
          this.film = data;
          this.form.patchValue(this.film);
        }
      });
    }
  }

  get f() {return this.form.controls}

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    Object.assign(this.film, this.form.value);

    if (this.id) {
      this.updateFilm();
    } else {
      this.storeFilm();
    }
  }

  private storeFilm() {
    this.filmService.storeFilm(this.film).subscribe((data) => {
      if (data) {
        this.route.navigate(['films']);
      }
    });
  }

  private updateFilm() {
    this.filmService.updateFilm(this.film).subscribe((data) => {
      if (data) {
        this.route.navigate(['films']);
      }
    });
  }

}
