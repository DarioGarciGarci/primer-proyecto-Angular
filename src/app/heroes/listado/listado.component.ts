import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes: string[] = ['Thor', 'Ironman', 'Spiderman', 'Antman', 'Hulk'];
  heroeBorrado: string = '';

  borrarHeroe(): string{
    this.heroeBorrado = this.heroes.pop() || '';
    return this.heroeBorrado;
  }
}
