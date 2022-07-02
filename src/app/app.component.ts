import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private peopleService: PeopleService) {

  }
  title = 'angular';

  pessoas = [{
    nome: '',
    sobrenome: '',
    age: 0,
  }]
  ngOnInit(): void {
    this.getPeople()
  }
  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people
    })
  }


}
