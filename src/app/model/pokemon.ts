import { PokemonSprit } from './pokemon-sprit';

export interface Pokemon {
    id:number;
    name:String;
    order:number;
    weight:number;
    height:number;
    is_default:true;
    sprites:PokemonSprit[];    
    //TODO: implement class pokemon
}
