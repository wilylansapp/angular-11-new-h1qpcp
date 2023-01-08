import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{ name }}!</h1>
    <br />
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `,
  ],
})
export class HelloComponent {
  name: string = 'yooo';
}
