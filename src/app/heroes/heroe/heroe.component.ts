import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'

})
export class HeroeComponent{
    public nombre: string = 'Ironam';
    public edad: number = 45;

    get nombreMayus(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        //return this.nombre + ' - ' +this.edad.toString();
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad = 33;
    }
}