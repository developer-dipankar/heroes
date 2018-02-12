import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../Models/hero.model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      // new Hero(100, '100 Pipes'),
      { id: 11, name: 'Mr. Niceo' },
      { id: 12, name: 'Narcoo' },
      { id: 13, name: 'Bombastoo' },
      { id: 14, name: 'Celeritaso' },
      { id: 15, name: 'Magnetao' },
      { id: 16, name: 'RubberMano' },
      { id: 17, name: 'Dynamao' },
      { id: 18, name: 'Dr IQo' },
      { id: 19, name: 'Magmao' },
      { id: 20, name: 'Tornadoo' }
    ];
    return {heroes};
  }
}
