import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {

 pokemon: Pokemon = {
    id: 1,
    name: "Bulbasaur",
    height: 0.7,
    weight: 6.9,
    types: ["Grass", "Poison"],
    family: "Bulbasaur"

  }
}
