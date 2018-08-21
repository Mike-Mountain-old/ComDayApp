import {Component, OnInit, ElementRef, ViewChild, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild('page') page: ElementRef;

  vh = window.innerHeight * 0.01;

  constructor(public render: Renderer2) {
  }

  ngOnInit() {
    this.render.setProperty(this.page.nativeElement, '--vh', `${this.vh}px`);
  }

}
