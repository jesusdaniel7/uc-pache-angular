import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-helpers-generic-list',
  templateUrl: './helpers-generic-list.component.html',
  styleUrls: ['./helpers-generic-list.component.scss']
})
export class HelpersGenericListComponent implements OnInit {

  constructor() { }
  @Input() list = [];
  ngOnInit(): void {

    
  }

}
