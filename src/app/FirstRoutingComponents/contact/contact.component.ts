import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `<h1>Contact Us</h1>
            <p>Contact Component works..!</p>`
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
