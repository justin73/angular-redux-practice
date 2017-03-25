import { Hero } from './hero';
export const HEROES: Hero[] = [
  {
      id: 11, 
      name: 'BMW', 
      addition_info:{
        title:' this is a BMW Compnay',
        content:'content for BMW',
      }
  },
  // {
  //     id: 12, 
  //     name: 'FORD',
  //     addition_info:{
  //       title:'this is a FORD Compnay',
  //       content:'content for BMW',
  //     }
  // },
];


import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemHeroService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: '1', name: 'Windstorm', addition_info:{
        title:' this is a BMW Compnay',
        content:'content for BMW',
      }},
      { id: '2', name: 'Bombasto', addition_info:{
        title:' this is a BMW Compnay',
        content:'content for BMW',
      } },
      { id: '3', name: 'Magneta', addition_info:{
        title:' this is a BMW Compnay',
        content:'content for BMW',
      }},
      { id: '4', name: 'Tornado', addition_info:{
        title:' this is a BMW Compnay',
        content:'content for BMW',
      } }
    ];
    return {heroes};
  }
}