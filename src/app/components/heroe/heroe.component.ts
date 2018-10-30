import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};
  brandURL = '';

  constructor( private activatedRoute: ActivatedRoute,
        private _heroesService: HeroesService ) {

    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

ngOnInit() {
 this.chooseBrand();
  }
  chooseBrand() {
    if (this.heroe.casa === 'DC') {
       this.brandURL = 'assets/img/DClogo.png';
    }
   if (this.heroe.casa === 'Marvel') {
       this.brandURL = 'assets/img/MARVELlogo.png';
    }

    console.log(this.brandURL);
  }


}
