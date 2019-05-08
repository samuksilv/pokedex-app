import { LinkPokemon } from './link-pokemon';

export interface ResourcePokemon {
    count:number;
    next:string;
    previos:string;
    results:LinkPokemon[];
}
