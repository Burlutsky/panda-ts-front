import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {People} from "src/app/models/people";
import {PeopleService} from "src/app/services/people.service";

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.sass']
})
export class PeopleFormComponent implements OnInit {

  form: FormGroup;

  id: number;

  person: People;

  constructor(
    private peopleService: PeopleService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.person = {
      id: 0,
      name: '',
      height: '',
      mass: '',
      hair_color: '',
      skin_color: '',
      eye_color: '',
      birth_year: '',
      gender: '',
      homeworld: '',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '',
      edited: '',
      url: '',
      section_id: 0
    }

    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getPerson();

    this.form = new FormGroup({
      name: new FormControl(this.person.name,[Validators.required]),
      height: new FormControl(this.person.height,[Validators.required]),
      mass: new FormControl(this.person.mass,[Validators.required]),
      hair_color: new FormControl(this.person.hair_color,[Validators.required]),
      skin_color: new FormControl(this.person.skin_color,[Validators.required]),
      birth_year: new FormControl(this.person.birth_year,[Validators.required]),
      gender: new FormControl(this.person.gender,[Validators.required]),
      homeworld: new FormControl(this.person.homeworld,[Validators.required]),
      films: new FormControl(this.person.films,[Validators.required]),
      species: new FormControl(this.person.species,[Validators.required]),
      vehicles: new FormControl(this.person.vehicles,[Validators.required]),
      starships: new FormControl(this.person.starships,[Validators.required]),
      created: new FormControl(this.person.created,[Validators.required]),
      edited: new FormControl(this.person.edited,[Validators.required]),
      url: new FormControl(this.person.url,[Validators.required]),
    });
  }

  private getPerson() {
    if (this.id) {
      this.peopleService.getPerson(this.id).subscribe((data)=> {
        if (data) {
          this.person = data;
          console.log(this.person);
          this.form.patchValue(this.person);
        }
      });
    }
  }

  get f() {return this.form.controls}

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    Object.assign(this.person, this.form.value);

    if (this.id) {
      this.updatePerson();
    } else {
      this.storePerson();
    }
  }

  private storePerson() {
    this.peopleService.storePerson(this.person).subscribe((data) => {
      if (data) {
        this.route.navigate(['']);
      }
    });
  }

  private updatePerson() {
    this.peopleService.updatePerson(this.person).subscribe((data) => {
      if (data) {
        this.route.navigate(['']);
      }
    });
  }
}
