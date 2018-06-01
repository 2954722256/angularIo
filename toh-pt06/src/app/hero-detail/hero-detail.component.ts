import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../bean/hero";
import {HeroService} from "../hero.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';


// 本来在heroes中的代码， 提取到 hero-detail中， 解耦
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    // 因为 heroes页面去掉了 app-hero-detail 标签 （包括 里面的 [hero]="selectedHero"）
    @Input() hero: Hero;

  // hero : Hero;

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) { }

  ngOnInit() {
      this.getHero();
  }

    getHero(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }

}
