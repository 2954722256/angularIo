import { Component, OnInit } from '@angular/core';
import {Hero} from "../bean/hero";
import { HEROES } from '../mock-heroes';
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };


  // 之前 直接用 mock 数据， 现在换成空的， 用 Service 初始化
  // heroes = HEROES;
  heroes: Hero[];

  selectedHero: Hero;

  constructor(public heroService : HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }


  onSelect(hero: Hero): void {
      this.selectedHero = hero;
  }

  getHeroes(): void {
      this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes);
  }


}
