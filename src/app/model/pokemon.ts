import { PokemonSprit } from './pokemon-sprit';
import { PokemonStatus } from './pokemon-status';
import { PokemonType } from './pokemon-type';

export interface Pokemon {
    id:number;
    name:String;
    order:number;
    weight:number;
    height:number;
    is_default:true;
    sprites:PokemonSprit[]; 
    types:PokemonType[];
    status: PokemonStatus[];
    locations:String[];
}
