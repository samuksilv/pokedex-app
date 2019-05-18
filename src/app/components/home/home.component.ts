import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { ResourcePokemon } from 'src/app/model/resource-pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { tap, pluck, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: PokemonService) { }

  pokemons: Pokemon[] = [];
  resource: ResourcePokemon;

  ngOnInit() {

    console.time("resource");

    this.service.getResourcePokemons()
      .pipe(
        tap((resources: ResourcePokemon) => this.resource = resources),
        pluck('pokemons'),
        mergeMap((array: string[]) => array.map(x => x)),
        mergeMap((name: string) => this.service.getPokemonByName(name)),                 
      )
      .subscribe(
        (pokemon: Pokemon) => this.pokemons.push(pokemon),
        error => console.error(error),
        () => console.log('completed'));
  }

}
