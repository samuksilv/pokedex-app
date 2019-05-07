import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pokedex';

  sidenavOpened:boolean= false;
  
  ngOnInit(): void {
    this.sidenavOpened=false;
  }

  async openCloseSidenav(event:boolean){
    this.sidenavOpened = event;   
    console.log(this.sidenavOpened); 
  }
}
