import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./bean/hero";
import {of} from "rxjs/internal/observable/of";
import {Observable} from "rxjs/internal/Observable";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

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



     // Observable 方式 返回， Hero数组的数据
    // getHeroes(): Observable<Hero[]> {
    //     return of(HEROES);
    //
    // }



    //
    // getHeroes(): void {
    //     this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    // }


    // 通过 MessageService 获取 数据 （链式， 当 MessageService 添加数据的时候， 这边会也增加数据 ）
    getHeroes(): Observable<Hero[]> {
        // TODO: send the message _after_ fetching the heroes
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }

}
