import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sample } from '../Sample';

@Component({
  selector: 'app-view-samples-listview',
  templateUrl: './view-samples-listview.component.html',
  styleUrls: ['./view-samples-listview.component.css']
})
export class ViewSamplesListviewComponent implements OnInit {

  @Input()
  sample!: Sample;
  @Output() sampleDeleteEvent: EventEmitter<Sample> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }


  onDelete(sample: Sample){
    this.sampleDeleteEvent.emit(sample);
    console.log("Delete clicked");
  }


}
