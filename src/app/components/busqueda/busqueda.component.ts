import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeModel, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  heroes : HeroeModel[] = [];
  heroesBusqueda : string = '';

  constructor( private activatedRoute : ActivatedRoute, private _hs : HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroesBusqueda = params['termino'];
      this.heroes = this._hs.buscarHeroe(params['termino'])
    })
  }

  ngOnInit(): void {

  }

}
