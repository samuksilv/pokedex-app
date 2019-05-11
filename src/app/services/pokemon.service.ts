import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { ResourcePokemon } from '../model/resource-pokemon';
import { Pokemon } from '../model/pokemon';
import { PokemonSprit } from '../model/pokemon-sprit';
import { PokemonStatus } from '../model/pokemon-status';
import { PokemonAbility } from '../model/pokemon-ability';
import { PokemonType } from '../model/pokemon-type';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.url_api_pokemon;

  getResourcePokemons(): Observable<ResourcePokemon> {
    return this.http.get(`${this.baseUrl}/api/v2/pokemon`)
      .pipe(        
        map((result: any) => {
          return new ResourcePokemon(result.count, result.next,
            result.previos, result.results.map(r => r.name));
        }),
        catchError(err => throwError('Erro ao buscar os livros'))
      );
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get(`${this.baseUrl}api/v2/pokemon/${name}`)
      .pipe(
        map((result: any) => {
          let pokemon = new Pokemon();
          pokemon.id = result.id;
          pokemon.height = result.height;
          pokemon.name = result.name;
          pokemon.order = result.order;
          pokemon.weight = result.weight;
          pokemon.sprites = result.sprites
            .map((sprit: any) => {
              return sprit as PokemonSprit
            });
          pokemon.status = result.stats
            .map((stat: any) => {
              return new PokemonStatus(stat.stat.name, stat.base_stat);
            });
          pokemon.abilities = result.abilities
            .map((ability: any) => {
              return new PokemonAbility(ability.ability.name, ability.slot, ability.is_hidden);
            });
          pokemon.types = result.types
            .map((type: any) => {
              let pokemonType = new PokemonType();
              pokemonType.type = type.type.name;
              return pokemonType;
            });

          this.getLocationPokemon(result.location_area_encounters)
            .subscribe((locations:string[]) => pokemon.locations = locations);

          return pokemon;
        })
      );
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get(`${this.baseUrl}api/v2/pokemon/${name}`)
    .pipe(
      map((result: any) => {
        let pokemon = new Pokemon();
        pokemon.id = result.id;
        pokemon.height = result.height;
        pokemon.name = result.name;
        pokemon.order = result.order;
        pokemon.weight = result.weight;
        pokemon.sprites = result.sprites
          .map((sprit: any) => {
            return sprit as PokemonSprit
          });
        pokemon.status = result.stats
          .map((stat: any) => {
            return new PokemonStatus(stat.stat.name, stat.base_stat);
          });
        pokemon.abilities = result.abilities
          .map((ability: any) => {
            return new PokemonAbility(ability.ability.name, ability.slot, ability.is_hidden);
          });
        pokemon.types = result.types
          .map((type: any) => {
            let pokemonType = new PokemonType();
            pokemonType.type = type.type.name;
            return pokemonType;
          });
          
        this.getLocationPokemon(result.location_area_encounters)
          .subscribe((locations:string[]) => pokemon.locations = locations);

        return pokemon;
      })
    );
  }

  getLocationPokemon(locationUrl: string): Observable<string[]> {
    return this.http.get(locationUrl)
      .pipe(
        map((results: any) => {
          return results
            .map((l: any) => {
              return <string>l.location_area.name;
            });
        })
      );
  }
}
