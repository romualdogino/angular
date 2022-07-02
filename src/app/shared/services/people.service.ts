import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }
  getPeople(): Observable<any> {

    let peopleArray = [
      {
        nome: 'Nome 1',
        sobrenome: "Sobre Nome 1",
        age: 20,
      }, {
        nome: "Nome 2",
        sobrenome: "Sobre Nome 2",
        age: 20,
      }, {
        nome: "Nome 3",
        sobrenome: "Sobre Nome 3",
        age: 20,
      }, {
        nome: "Nome 4",
        sobrenome: "Sobre Nome 4",
        age: 20,
      }
      , {
        nome: "Nome 5",
        sobrenome: "Sobre Nome 5",
        age: 20,
      }, {
        nome: "Nome 6",
        sobrenome: "Sobre Nome 6",
        age: 20,
      }, {
        nome: "Nome 7",
        sobrenome: "Sobre Nome 7",
        age: 20,
      }
    ]
    return of(peopleArray)
  }
}
