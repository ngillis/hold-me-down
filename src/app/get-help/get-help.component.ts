import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-get-help',
  templateUrl: './get-help.component.html',
  styleUrls: ['./get-help.component.scss']
})
export class GetHelpComponent implements OnInit {
  title = 'default';
  content ='';
  header={};

  constructor() {
  }



  ngOnInit() {
    this.header = {title: 'default'}
  }

}
