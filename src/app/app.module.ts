import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store'; 
import { IAppState, rootReducer } from './store';
import { AppComponent } from './app.component';
import { INITIAL_STATE } from './store';

import { InMemHeroService }     from './MockHero';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    InMemoryWebApiModule.forRoot(InMemHeroService, { delay: 1500 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux:NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
