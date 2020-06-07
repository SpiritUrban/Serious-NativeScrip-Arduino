import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() collapse: boolean;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
