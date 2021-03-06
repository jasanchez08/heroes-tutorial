import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // NgModel directive lives here

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule // importa el modulo de FormsModule para enlazar con 
  ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent
    ],
  bootstrap: [ 
    AppComponent 
    ]
})
export class AppModule { }
