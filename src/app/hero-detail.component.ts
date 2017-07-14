import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component ({
    selector: 'hero-detail',
    template: `
    <h1>{{title}}</h1>
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div>
        <label>ID: </label>{{hero.id}}
      </div>
      <div>
        <label>Name: </label>{{hero.name}}
        <br>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>
    `
})

export class HeroDetailComponent {
    @Input() hero: Hero;
}