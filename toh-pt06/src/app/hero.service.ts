import {Injectable} from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./bean/hero";
import {of} from "rxjs/internal/observable/of";
import {Observable} from "rxjs/internal/Observable";
import {MessageService} from "./message.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    private heroesUrl = 'api/heroes';  // URL to web api

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) {
    }

    ngOnInit() {
        // this.getHeroes()
    }


    // 通过 MessageService 获取 数据 （链式， 当 MessageService 添加数据的时候， 这边会也增加数据 ）
    getHeroes(): Observable<Hero[]> {
        // TODO: send the message _after_ fetching the heroes
        // console.log('contact by edited id is';
        this.messageService.add('HeroService: fetched heroes' + ' 触发 MessageService ');
        return of(HEROES);
    }


    // HeroDetails 的 Component 使用 （暂时从 mock的数据里面拿）
    getHero(id: number): Observable<Hero> {
        // TODO: send the message _after_ fetching the hero
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(HEROES.find(hero => hero.id === id));
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add('HeroService: ' + message);
    }

}
