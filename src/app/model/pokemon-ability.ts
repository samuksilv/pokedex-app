export class PokemonAbility {

    constructor(ability: string, slot:number, isHidden:boolean){
        this.ability= ability;
        this.isHidden= isHidden;
        this.slot = slot;
    }
    
    isHidden:boolean;
    slot:number;
    ability:string;
}
