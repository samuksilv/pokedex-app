import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { ResourcePokemon } from 'src/app/model/resource-pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

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
      .subscribe(
        result => this.resource = result,
        error => {
          console.timeEnd("resource");
          console.error(error);
        },
        () => {
          console.log(this.resource);
          console.timeEnd("resource");

          console.time("pokemons");

          this.resource.pokemons.map((name) => {
            this.service.getPokemonByName(name).subscribe(
              result => this.pokemons.push(result),
              error => {
                console.timeEnd("pokemons");
                console.error(error);
              }
            )
          });
          console.log(this.pokemons);
          console.timeEnd("pokemons");
        }
      );



  }

}
