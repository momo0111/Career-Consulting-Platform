import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  

  showForm: boolean;

  @Output() addEvent = new EventEmitter();

  toggleAptDisplay() {
    this.showForm = !this.showForm;
  }

  handleAdd(formInfo: any) {
    const tempItem: object = {
      date: formInfo.date,
      startTime: formInfo.startTime,
      endTime: formInfo.endTime,
      aptNote: formInfo.aptNote,
    };
    this.addEvent.emit(tempItem);
    this.showForm = ! this.showForm;


  }

  constructor() { 
    this.showForm = true;
  }
  ngOnInit(): void {
  }

}
