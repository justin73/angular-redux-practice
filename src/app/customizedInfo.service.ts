import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { Hero } from './hero';
import { HEROES } from './MockHero';
import { INCREMENT } from './actions';

@Injectable()
export class HeroService {
  heroes: Hero[];
//   constructor(private ngRedux:NgRedux<IAppState>){
//     this.getHeroes();
//     this.ngRedux.dispatch({type:'INITIALIZATION', payload:{title:this.heroes[0].name}});
//   }
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
    
  }
}