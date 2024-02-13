import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {

  constructor(private pokemonService: PokemonService) { }

  pokemons = POKEMONS;
  selectedPokemon?: Pokemon;

  

  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }
}
