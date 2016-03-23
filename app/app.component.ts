/** Import the Component class from the core code of angular */
import { Component } from 'angular2/core';

/** interface is a light weight class. Is used in the case
    where you need an object that doesn't do anything. */
interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
  <h1>{{ title }}</h1>

  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="#hero of heroes"
      (click)="onSelect(hero)"
      [class.selected]="hero === selectedHero">
      <span class="badge">{{ hero.id }}</span> {{ hero.name }}
    </li>
  </ul>

  <div *ngIf="selectedHero">
    <h2>{{ selectedHero.name }} details!</h2>

    <div><label>Id: </label>{{ selectedHero.id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="selectedHero.name" placeholder="name">
    </div>
  </div>
  `
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
  `]
})

/** Send the app to the view */
export class AppComponent { 
  title = 'Tour of Heroes';
  public heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero) { this.selectedHero = hero; }
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneto" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];