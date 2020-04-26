import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { without } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proj-appoinment';
  theList: object[];

  notActive = false;

  deleteApt(theApt: object) {
    this.theList = without(this.theList, theApt);
  } 

  addApt(theApt: object) {
    this.theList.unshift(theApt);
  } 

  constructor( private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Object[]>('./assets/data.json').subscribe(data => {
      this.theList = data;
    });

    if(this.theList.length === 0) {
      this.notActive = true;
    }
  }
}
