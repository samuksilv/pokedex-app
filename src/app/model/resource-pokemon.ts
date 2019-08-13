
export class ResourcePokemon {

    constructor(count: number, nextUrl: string, previosUrl: string, urls:string[]) {
        this.count = count;
        this.nextUrl = nextUrl;
        this.previosUrl = previosUrl;
        this.urls= urls;
    }

    urls:string[];
    count: number;
    nextUrl: string;
    previosUrl: string;

}
