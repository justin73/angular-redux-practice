import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store';
import { INCREMENT } from './actions';
import {Observable} from 'rxjs/Observable';
import { HeroService } from './customizedInfo.service';
import { Hero } from './hero';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  
  title = 'app works!';
  heroes: Hero[];
  //@select() counter;
  @select('counter') count;
  @select(['messaging', 'company_name']) newMessages;
  // messaging.newMessages
  
  constructor(private ngRedux:NgRedux<IAppState>, private heroService: HeroService) {

  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes).then(()=>{
      this.ngRedux.dispatch({type:'INITIALIZATION', payload:{title:this.heroes[0].name}});
    });
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  increment(){
    this.ngRedux.dispatch({type:INCREMENT, payload:{title:this.heroes[0].name}});
  }
}
