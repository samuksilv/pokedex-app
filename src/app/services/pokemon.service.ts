import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  private baseUrl= environment.url_api_pokemon;

  async getAllPokemons(){
    return this.http.get(`${this.baseUrl}/api/v2/pokemon`);
  }
}
