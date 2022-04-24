import { Component, OnInit } from '@angular/core';
import {Section} from "../../models/section";
import {SectionService} from "../../services/section.service";

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.sass']
})
export class SectionsComponent implements OnInit {
  sections: Section[];

  constructor(
    private sectionService: SectionService
  ) { }

  ngOnInit(): void {
    this.getSections();
  }

  private getSections() {
    this.sectionService.getSections().subscribe((data: Section[])=> {
      this.sections = data;
    })
  }

}
