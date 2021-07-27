import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component-bootstrap.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {


  //create an array of objects

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kamar", "anup@mail.com", 50000),
    new SalesPerson("John", "Doe", "john@mail.com", 40000),
    new SalesPerson("Claire", "Murphy", "claire@mail.com", 60000),
    new SalesPerson("Mai", "Turong", "mai@mail.com", 65000),
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
