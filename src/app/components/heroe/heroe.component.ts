import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroeModel, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe_id! : number;
  heroe! : HeroeModel;

  constructor( private rutaActiva : ActivatedRoute, private _hs : HeroesService ) {

    this.rutaActiva.params.subscribe( datos => {
      this.heroe_id = datos['id'];

      this.heroe = this._hs.obtenerHeroe(this.heroe_id);

    })

  }

  ngOnInit(): void {
  }

}
