import { PokemonSprit } from './pokemon-sprit';
import { PokemonStatus } from './pokemon-status';
import { PokemonType } from './pokemon-type';
import { PokemonAbility } from './pokemon-ability';

export class Pokemon {
    id:number;
    name:string;
    order:number;
    weight:number;
    height:number;
    is_default:true;
    sprites:PokemonSprit; 
    types:PokemonType[];
    status: PokemonStatus[];
    locations:string[];
    abilities: PokemonAbility[];
}
