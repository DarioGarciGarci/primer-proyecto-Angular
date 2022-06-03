import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo: string = 'Contador app';
  public numero: number = 0;
  public base: number = 5;

  acumular(valor: number): number{
    return this.numero += valor;
  }
}
