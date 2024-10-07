import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroNames: string[] = ['Spiderman', 'Iron Man', 'Hulk', 'Thor']
  heroe_borrado?:string

  deleteHeroe():void{
    this.heroe_borrado = this.heroNames.pop()
  }
}
