import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../bean/hero";


// 本来在heroes中的代码， 提取到 hero-detail中， 解耦
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;ß


  constructor() { }

  ngOnInit() {
  }

}
