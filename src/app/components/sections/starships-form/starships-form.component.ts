import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Starship} from "../../../models/starship";
import {ActivatedRoute, Router} from "@angular/router";
import {StarshipService} from "../../../services/starship.service";

@Component({
  selector: 'app-starships-form',
  templateUrl: './starships-form.component.html',
  styleUrls: ['./starships-form.component.sass']
})
export class StarshipsFormComponent implements OnInit {

  form: FormGroup;

  id: number;

  starship: Starship

  constructor(
    private starshipService: StarshipService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.starship = {
      id: 0,
      name: '',
      model: '',
      manufacturer: '',
      cost_in_credits: '',
      length: '',
      max_atmosphering_speed: '',
      crew: '',
      passengers: '',
      cargo_capacity: '',
      consumables: '',
      hyperdrive_rating: '',
      MGLT: '',
      starship_class: '',
      pilots: [],
      films: [],
      created: '',
      edited: '',
      url: '',
    };

    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getStarship();

    this.form = new FormGroup({
      name: new FormControl(this.starship.name,[Validators.required]),
      model: new FormControl(this.starship.model,[Validators.required]),
      manufacturer: new FormControl(this.starship.manufacturer,[Validators.required]),
      cost_in_credits: new FormControl(this.starship.cost_in_credits,[Validators.required]),
      length: new FormControl(this.starship.length,[Validators.required]),
      max_atmosphering_speed: new FormControl(this.starship.max_atmosphering_speed,[Validators.required]),
      crew: new FormControl(this.starship.crew,[Validators.required]),
      passengers: new FormControl(this.starship.passengers,[Validators.required]),
      cargo_capacity: new FormControl(this.starship.cargo_capacity,[Validators.required]),
      consumables: new FormControl(this.starship.consumables,[Validators.required]),
      hyperdrive_rating: new FormControl(this.starship.hyperdrive_rating,[Validators.required]),
      MGLT: new FormControl(this.starship.MGLT,[Validators.required]),
      starship_class: new FormControl(this.starship.starship_class,[Validators.required]),
      pilots: new FormControl(this.starship.pilots,[Validators.required]),
      films: new FormControl(this.starship.films,[Validators.required]),
      created: new FormControl(this.starship.created,[Validators.required]),
      edited: new FormControl(this.starship.edited,[Validators.required]),
      url: new FormControl(this.starship.url,[Validators.required]),
    });
  }

  private getStarship() {
    if (this.id) {
      this.starshipService.getStarship(this.id).subscribe((data)=> {
        if (data) {
          this.starship = data;
          this.form.patchValue(this.starship);
        }
      });
    }
  }

  get f() {return this.form.controls}

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    Object.assign(this.starship, this.form.value);

    if (this.id) {
      this.updateStarship();
    } else {
      this.storeStarship();
    }
  }

  private storeStarship() {
    this.starshipService.storeStarship(this.starship).subscribe((data) => {
      if (data) {
        this.route.navigate(['starships']);
      }
    });
  }

  private updateStarship() {
    this.starshipService.updateStarship(this.starship).subscribe((data) => {
      if (data) {
        this.route.navigate(['starships']);
      }
    });
  }
}
