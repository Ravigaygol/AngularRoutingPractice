import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h1>Welcome!</h1>
              <p>Welcome to home component..!</p>`
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

}
