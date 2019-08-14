import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { NgbCarousel} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  
  BADGE_TYPES_COLORS = [
    { type: 'normal', color: 'secondary' },
    { type: 'flying', color: 'secondary' },
    { type: 'unknown', color: 'secondary' },
    { type: 'ground', color: 'brown' },
    { type: 'rock', color: 'brown' },
    { type: 'bug', color: 'success' },
    { type: 'grass', color: 'success' },
    { type: 'fighting', color: 'danger' },
    { type: 'fire', color: 'danger' },
    { type: 'electric', color: 'warning' },
    { type: 'dragon', color: 'warning' },
    { type: 'water', color: 'info' },
    { type: 'ice', color: 'info' },
    { type: 'steel', color: 'silver' },
    { type: 'fairy', color: 'pink' },
    { type: 'psychic', color: 'pink' },
    { type: 'dark', color: 'purple' },
    { type: 'ghost', color: 'purple' },
    { type: 'poison', color: 'purple' },
    { type: 'shadow', color: 'purple' },
  ];  

  @Input() pokemon: Pokemon;
  
  constructor() { }

  ngOnInit() {
    
  }

  getColorByType(type: string): string {
    let badge = this.BADGE_TYPES_COLORS.find((badge) => badge.type === type);
    let color = badge.color;
    return `badge-${color}`;
  }


}
