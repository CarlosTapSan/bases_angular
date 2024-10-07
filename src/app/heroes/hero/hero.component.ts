import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'Ironman';
  public age:number = 45

  get capitalizeName():string{
    return this.name.toUpperCase()
  }

  public getHeroDescription():string{
    let nameAge:string = this.name + ' - ' + this.age
    return nameAge
  }

  public changeHero():void{
    this.name = 'Spiderman'
  }

  public changeAge():void{
    this.age = 25
  }

  public resetForm():void{
    this.name = 'Ironman'
    this.age = 45
    document.getElementById("titulo_mosulo_heroes")!.innerHTML = 'Reset ' + this.name

  }
}
