import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { Hero } from './hero';
import { HEROES } from './MockHero';
import { INCREMENT } from './actions';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  heroes: Hero[];
//   constructor(private ngRedux:NgRedux<IAppState>){
//     this.getHeroes();
//     this.ngRedux.dispatch({type:'INITIALIZATION', payload:{title:this.heroes[0].name}});
//   }
  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/heroes';  // URL to web api
  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    console.log("ddd");
    this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => {
                 response.json().data;
                 console.log(response.json().data);
                })
               .catch(this.handleError);
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
    
  }
  private handleError(error){
    console.log(error);
  }
}