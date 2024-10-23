import { Sample } from './../Sample';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-sample',
  templateUrl: './add-sample.component.html',
  styleUrls: ['./add-sample.component.css']
})
export class AddSampleComponent implements OnInit {
  name!: string;
  description!: string;
  price!: string;

  @Output() addSampleEvent: EventEmitter<Sample> =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("Submitting form");
    const sample = {
      name: this.name,
      description: this.description,
      price: this.price
    };
    console.log(this.name);
    console.log(this.description);
    console.log(this.price);
    this.addSampleEvent.emit(sample);
    console.log("Event emitted");

  }

}
