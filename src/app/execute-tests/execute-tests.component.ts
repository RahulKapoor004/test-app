import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-execute-tests',
  templateUrl: './execute-tests.component.html',
  styleUrls: ['./execute-tests.component.css']
})
export class ExecuteTestsComponent implements OnInit {
  dataSource: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }
  onFormSubmit(data: any) {
    this.dataSource.push(data);
  }

  resetTable() {
    this.dataSource = [];
  }
}
