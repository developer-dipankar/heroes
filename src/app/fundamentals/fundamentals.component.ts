import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Models/hero.model';

@Component({
  selector: 'app-fundamentals',
  templateUrl: './fundamentals.component.html',
  styleUrls: ['./fundamentals.component.css']
})
export class FundamentalsComponent implements OnInit {
  hero = new Hero();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void{
    // this.hero = new Hero(this.hero.id, this.hero.name);
    console.log(this.hero.id);
  }

}
