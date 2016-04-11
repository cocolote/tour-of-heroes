/** Import the Component class from the core code of angular */
import { Component, OnInit } from 'angular2/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
  selector: 'my-heroes',
  template: `
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="#hero of heroes"
      (click)="onSelect(hero)"
      [class.selected]="hero === selectedHero">
      <span class="badge">{{ hero.id }}</span> {{ hero.name }}
    </li>
  </ul>

  <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  styles: [`
    .selected {
      background-color: #cfd8dc !important;
      color: #fff;
    }

    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 10em;
    }

    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #eee;
      margin: 0.5em;
      padding: 0.3em 0;
      height: 1.6em;
      border-radius: 4px;

      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
    }

    .heroes li.selected:hover {
      background-color: #bbd8dc !important;
      color: #fff;
    }

    .heroes li:hover {
      color: #607d8b;
      background-color: #ddd;
      left: 0.1em;
    }

    .heroes .text {
      position: relative;
      top: -3px;
    }

    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: #fff;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607d8b;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: 0.8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  directives: [HeroDetailComponent]
})

/** Send the app to the view */
export class HeroesComponent implements OnInit { 
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private _heroService: HeroService) { }

  getHeroes() {
    this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }
}
