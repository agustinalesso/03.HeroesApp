import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router : Router ) { }

  ngOnInit(): void {
  }

  buscarHeroes(terminoBusqueda : any){
    if(terminoBusqueda){
      this.router.navigate( ['/busqueda', terminoBusqueda] )
    }else{
      alert('No ingresaste nadaaaaa!!!!')
    }
  }

}
