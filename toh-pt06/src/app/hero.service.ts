import {Injectable} from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./bean/hero";
import {of} from "rxjs/internal/observable/of";
import {Observable} from "rxjs/internal/Observable";
import {MessageService} from "./message.service";
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";

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
        this.messageService.add('HeroService: fetched heroes' + ' 触发 MessageService ');
        // return of(HEROES);  // 之前， 直接用 数组数据， 后面改成 http.get
        return this.http.get<Hero[]>(this.heroesUrl).pipe(
            tap(heroes => this.log(`fetched heroes`)),
            catchError(this.handleError('getHeroes', []))
        );
    }



    // HeroDetails 的 Component 使用 （暂时从 mock的数据里面拿）
    getHero(id: number): Observable<Hero> {
        // TODO: send the message _after_ fetching the hero
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(HEROES.find(hero => hero.id === id));
    }




    /**
     * http错误的时候， http继续， 打印信息， 返回信息
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }


    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add('HeroService: ' + message);
    }

}
