import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroeModel, HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : any = [];

  constructor( private _hs : HeroesService, private router: Router ){
  }

  ngOnInit(): void {
    this.heroes = this._hs.obtenerHeroes()
  }


  redireccionarAHeroe(evento: HeroeModel){
    this.router.navigate( ['/ver-heroe',evento.id])
  }

}
