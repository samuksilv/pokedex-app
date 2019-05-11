import { LinkPokemon } from './link-pokemon';

export interface ResourcePokemon {
    count:number;
    nextUrlUrl:string;
    previos:string;
    results:LinkPokemon[];    
}
