export class PokemonStatus {
    constructor(name:string, baseStatus:number){
        this.baseStatus=baseStatus;
        this.name=name;
    }

    baseStatus: number;
    name: string;
}
