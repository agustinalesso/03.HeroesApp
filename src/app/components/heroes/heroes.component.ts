import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : any = [];

  constructor( private _hs : HeroesService ){
  }

  ngOnInit(): void {
    this.heroes = this._hs.obtenerHeroes()
  }

}
