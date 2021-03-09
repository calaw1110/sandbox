import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'sandox';
  currentPage: string = '';
  btn_id: string='';
  constructor() { }
  ngOnInit() {
  }
  ngAfterViewInit() {

  }
  btnClick(event: any) {
    console.log(event);
    let id = event.target.id;
    this.btn_id = id;
    switch (id) {
      case 'btn-ngFor':
        this.currentPage = 'page-ngFor';
        break;
      case 'btn-ngIf':
        this.currentPage = 'page-ngIf';
        break;
      case 'btn-ngSwitch':
        this.currentPage = 'page-ngSwitch';
        break;
    }
  }
}
