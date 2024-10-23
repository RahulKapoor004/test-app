import { Sample } from './../Sample';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-view-samples',
  templateUrl: './view-samples.component.html',
  styleUrls: ['./view-samples.component.css']
})
export class ViewSamplesComponent implements OnInit {

  samples!: Sample[];
  localItem: string | null;

  constructor() { 
      this.localItem = localStorage.getItem("samples");
      this.samples = this.localItem ? JSON.parse(this.localItem) : []; // Fallback to empty array
  }


  ngOnInit(): void {
  }
  onDelete(sample: Sample){
    console.log("Deleted");
    let index = this.samples.indexOf(sample);
    this.samples.splice(index,1);
    localStorage.setItem("samples", JSON.stringify(this.samples));

  }

  addSample(sample: Sample){
    console.log("Adding Sample");
    this.samples.push(sample);
    localStorage.setItem("samples", JSON.stringify(this.samples));

  }

}
