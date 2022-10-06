import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  menuVariable: boolean = false;
  ngOnInit(): void {
  }
  openMenu(){
  this.menuVariable =! this.menuVariable;
  }
}
