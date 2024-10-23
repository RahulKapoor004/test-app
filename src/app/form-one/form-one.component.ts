import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})
export class FormOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() formSubmit = new EventEmitter<any>();
  data: string = '';

  submit() {
    this.formSubmit.emit({ data: this.data });
    this.data = '';  // Clear the form
  }
}
