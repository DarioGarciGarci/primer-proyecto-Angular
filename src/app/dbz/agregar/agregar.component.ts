import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

  constructor( private dbzService: DbzService) { }

  ngOnInit(): void {
  }

  @Input('nuevo') nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(): void{
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo);
    //this.onNuevoPersonaje.emit( this.nuevo );
    this.dbzService.agregarPersonaje( this.nuevo );
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
