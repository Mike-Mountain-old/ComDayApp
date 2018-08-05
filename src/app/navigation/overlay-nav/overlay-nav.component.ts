import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './overlay-nav.component.html',
  styleUrls: ['./overlay-nav.component.scss']
})
export class OverlayNavComponent implements OnInit {

  showMenu = false;

  constructor() { }

  ngOnInit() {
  }

}
