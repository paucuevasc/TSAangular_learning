import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../../services/heroes.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  heroesArr = [];
  constructor(private _heroesService: HeroesService) { }

  ngOnInit() {
  }
buscarHeroe( termino: string) {


  console.log(termino);
  this.heroesArr.push(this._heroesService.buscarHeroes( termino ));

}

}
