import { Component, OnInit } from '@angular/core';
import {PeopleService} from "src/app/services/people.service";
import {People} from "src/app/models/people";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.sass']
})
export class PeopleComponent implements OnInit {
  people: People[];

  constructor(
    private peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    this.getPeople();
  }

  private getPeople() {
    this.peopleService.getPeople().subscribe((data: People[])=> {
      this.people = data;
    })
  }
}
