import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h1>Módulo Contador</h1>
  <p>El contador: {{counter}}</p>
  <button (click)="incrementarNumero(5)" style="margin-right: 10px;">+5</button>
  <button (click)="reducirNumero(7)" style="margin-right: 10px;">-7</button>
  <button (click)="resetNumero()">Reset</button>
  `
})

export class CounterComponent{
  public counter:number = 10;

  incrementarNumero(value:number):void{
    this.counter = this.counter+value
  }

  reducirNumero(value:number):void{
    this.counter = this.counter-value
  }

  resetNumero():void{
    this.counter = 10
  }
}
