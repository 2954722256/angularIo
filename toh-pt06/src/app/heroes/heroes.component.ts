import {Component, OnInit} from '@angular/core';
import {Hero} from "../bean/hero";
import {HEROES} from '../mock-heroes';
import {HeroService} from "../hero.service";

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

    heroes: Hero[];

    selectedHero: Hero;

    constructor(public heroService: HeroService) {
    }

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

    /**
     * 对应的添加操作
     * @param {string} name
     */
    add(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.addHero({name} as Hero)
            .subscribe(hero => {
                this.heroes.push(hero);
            });
    }

    delete(hero : Hero){
        if (!hero) {
            return;
        }
        this.heroes = this.heroes.filter(h => h !== hero);// filter（h=>） 处理 callback
        this.heroService.deleteHero(hero.id).subscribe();

    }



}
