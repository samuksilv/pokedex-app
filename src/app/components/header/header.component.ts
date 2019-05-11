import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { faFilter, IconDefinition, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faFilter:IconDefinition = faFilter;
  faSearch:IconDefinition = faSearch;  

  private openedFilterSidenav:boolean= false;
  @Output() openCloseSidenav = new EventEmitter<boolean>();
  
  constructor() { } 
  
  ngOnInit() {
  }

  async openCloseSidenavFilter(){
    this.openedFilterSidenav = !this.openedFilterSidenav;
    this.openCloseSidenav.emit(this.openedFilterSidenav);
  }

}
