import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { ResourcePokemon } from 'src/app/model/resource-pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { tap, pluck, mergeMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: PokemonService, private http: HttpClient) { }

  pokemons: Pokemon[] = [];
  resource: ResourcePokemon;

  ngOnInit() {

    let req = this.service.getResourcePokemons()
      .pipe(
        tap((resources: ResourcePokemon) => this.resource = resources),
        pluck('urls'),        
        mergeMap((array: string[]) => {
          return forkJoin(...array.map(url => this.http.get(url)))
        }),                         
      )
      .subscribe(
        (pokemons: Pokemon[]) => {
          this.pokemons = pokemons;
          console.log(this.pokemons);
        },
        error => console.error(error),
        () => console.log('completed'));
  }

}
