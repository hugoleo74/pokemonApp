import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];
  page: number = 1;
  total: number | undefined;


  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {

    this.getPokemons();

  }

  getPokemons() {
    this.dataService.getPokemons(10, this.page + 0)
      .subscribe((response: any) => {
        this.total = response.count;

        response.results.forEach((result: { name: string; }) => {
          this.dataService.getMoreData(result.name)
            .subscribe((UniqResponse: any) => {
              this.pokemons.push(UniqResponse);
              console.log(this.pokemons);
            });
        });
      });
  }

}
