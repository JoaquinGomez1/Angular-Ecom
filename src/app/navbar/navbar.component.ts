import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navLinks: Array<any> = [
    { name: 'home', url: '/', exact: true },
    { name: 'collection', url: '/collections', exact: true },
  ];
  constructor() {}

  ngOnInit(): void {}
}
