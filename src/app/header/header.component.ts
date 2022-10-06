import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  menu_icon_Variable: boolean = false;
  

  ngOnInit(): void {
  }
openMenu() {
  
  this.menu_icon_Variable =! this.menu_icon_Variable;
}
}
