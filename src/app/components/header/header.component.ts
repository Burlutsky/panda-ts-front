import { Component, OnInit } from '@angular/core';
import {SectionService} from "../../services/section.service";
import {Section} from "../../models/section";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean = true;
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
