import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterPokemonComponent } from './components/filter-pokemon/filter-pokemon.component';
import { HomeComponent } from './pages/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonDetailComponent,
    PokemonCardComponent,
    HeaderComponent,
    FilterPokemonComponent,
    SidenavComponent,
    ClickOutsideDirective      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
