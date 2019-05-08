import { Component, ViewChild } from '@angular/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pokedex';
  
  @ViewChild('sidenavFilter') sidenavFilter: SidenavComponent;
  
  ngOnInit(): void {    
  }

  async openCloseSidenav(event:boolean){
    
    this.sidenavFilter.openSidenav();    
  }
}
