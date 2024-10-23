import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedLink: string = '/add-sample'; // Default active link

  navItems = [
    { label: 'Add Sample', link: '/add-sample', icon: '#home' },
    { label: 'View All Samples', link: '/view-samples', icon: '#speedometer2' },
    { label: 'Reference Links', link: '/reference-links', icon: '#table' },
    { label: 'Execute Tests', link: '/execute-tests', icon: '#grid' },
    // Add more items as needed
  ];

  setActive(link: string) {
    this.selectedLink = link; // Set the active link
  }
}
