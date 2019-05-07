import { Component, OnInit } from '@angular/core';

import { faFilter, IconDefinition, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public isCollapsed = true;

  faFilter:IconDefinition = faFilter;
  faSearch:IconDefinition = faSearch;
  constructor() { }
  
  ngOnInit() {
  }



}
