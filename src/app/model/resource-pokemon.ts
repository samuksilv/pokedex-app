
export class ResourcePokemon {

    constructor(count: number, nextUrl: string, previosUrl: string, pokemons: string[]) {
        this.count = count;
        this.nextUrl = nextUrl;
        this.previosUrl = previosUrl;
        this.pokemons = pokemons;
    }

    count: number;
    nextUrl: string;
    previosUrl: string;
    pokemons: string[];
}
