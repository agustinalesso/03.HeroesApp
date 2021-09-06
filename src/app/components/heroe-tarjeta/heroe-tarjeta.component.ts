import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HeroeModel } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroeInput  : HeroeModel = {};
  @Output() clickHeroe : EventEmitter<HeroeModel> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  devolverHeroe(){
    this.clickHeroe.emit(this.heroeInput)
  }

}
