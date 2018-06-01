import {Injectable} from '@angular/core';
import {Hero} from "./bean/hero";
import {of} from "rxjs/internal/observable/of";
import {Observable} from "rxjs/internal/Observable";
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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



    // 从 常亮中获取， 修改为 假服务 获取
    getHero(id: number): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get<Hero>(url).pipe(
            tap(_ => this.log(`fetched hero id=${id}`)),
            catchError(this.handleError<Hero>(`getHero id=${id}`))
        );
    }

    /* GET heroes whose name contains search term */
    searchHeroes(term: string): Observable<Hero[]> {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return of([]);
        }
        return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
            tap(_ => this.log(`found heroes matching "${term}"`)),
            catchError(this.handleError<Hero[]>('searchHeroes', []))
        );
    }

    //////// Save methods //////////

    /** POST: add a new hero to the server */
    addHero (hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
            tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
            catchError(this.handleError<Hero>('addHero'))
        );
    }

    /** DELETE: delete the hero from the server */
    deleteHero (hero: Hero | number): Observable<Hero> {
        // typeof hero === 'number' ?
        // 三目，  为了， 可以 适配 id  和 hero 的传递
        const id = typeof hero === 'number' ? hero : hero.id;
        const url = `${this.heroesUrl}/${id}`;

        return this.http.delete<Hero>(url, httpOptions).pipe(
            tap(_ => this.log(`deleted hero id=${id}`)),
            catchError(this.handleError<Hero>('deleteHero'))
        );
    }

    /** PUT: update the hero on the server */
    updateHero (hero: Hero): Observable<any> {
        return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
            tap(_ => this.log(`updated hero id=${hero.id}`)),
            catchError(this.handleError<any>('updateHero'))
        );
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
