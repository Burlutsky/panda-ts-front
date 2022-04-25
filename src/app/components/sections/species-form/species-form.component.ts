import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Specie} from "../../../models/specie";
import {ActivatedRoute, Router} from "@angular/router";
import {SpecieService} from "../../../services/specie.service";

@Component({
  selector: 'app-species-form',
  templateUrl: './species-form.component.html',
  styleUrls: ['./species-form.component.sass']
})
export class SpeciesFormComponent implements OnInit {

  form: FormGroup;

  id: number;

  specie: Specie;

  constructor(
    private specieService: SpecieService,
    private route: Router,
    private activatedRoute: ActivatedRoute,) {
    this.specie = {
      id: 0,
      name: '',
      classification: '',
      designation: '',
      average_height: '',
      skin_colors: '',
      hair_colors: '',
      eye_colors: '',
      average_lifespan: '',
      homeworld: '',
      language: '',
      people: [],
      films: [],
      created: '',
      edited: '',
      url: '',
    };
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getSpecie();

    this.form = new FormGroup({
      name: new FormControl(this.specie.name,[Validators.required]),
      classification: new FormControl(this.specie.classification,[Validators.required]),
      designation: new FormControl(this.specie.designation,[Validators.required]),
      average_height: new FormControl(this.specie.average_height,[Validators.required]),
      skin_colors: new FormControl(this.specie.skin_colors,[Validators.required]),
      hair_colors: new FormControl(this.specie.hair_colors,[Validators.required]),
      eye_colors: new FormControl(this.specie.eye_colors,[Validators.required]),
      average_lifespan: new FormControl(this.specie.average_lifespan,[Validators.required]),
      homeworld: new FormControl(this.specie.homeworld,[Validators.required]),
      language: new FormControl(this.specie.language,[Validators.required]),
      people: new FormControl(this.specie.people,[Validators.required]),
      films: new FormControl(this.specie.films,[Validators.required]),
      created: new FormControl(this.specie.created,[Validators.required]),
      edited: new FormControl(this.specie.edited,[Validators.required]),
      url: new FormControl(this.specie.url,[Validators.required]),
    });
  }

  private getSpecie() {
    if (this.id) {
      this.specieService.getSpecie(this.id).subscribe((data)=> {
        if (data) {
          this.specie = data;
          this.form.patchValue(this.specie);
        }
      });
    }
  }

  get f() {return this.form.controls}

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    Object.assign(this.specie, this.form.value);

    if (this.id) {
      this.updateSpecie();
    } else {
      this.storeSpecie();
    }
  }

  private storeSpecie() {
    this.specieService.storeSpecie(this.specie).subscribe((data) => {
      if (data) {
        this.route.navigate(['species']);
      }
    });
  }

  private updateSpecie() {
    this.specieService.updateSpecie(this.specie).subscribe((data) => {
      if (data) {
        this.route.navigate(['species']);
      }
    });
  }
}
