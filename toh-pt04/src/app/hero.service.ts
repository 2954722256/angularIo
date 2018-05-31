import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./bean/hero";
import {of} from "rxjs/internal/observable/of";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }



  getFakeHeroes(): Hero[] {
      return HEROES;
  }

  // heroes: Hero[];
  // getHeroes(): void {
  //     this.heroes = this.heroService.getHeroes();
  // }

    //  Observable 方式 返回， Hero数组的数据
    // getHeroes(): Observable<Hero[]> {
    //     return of(HEROES);
    //
    // }

    getHeroes(): Hero {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }


}
