import { Component, Input } from '@angular/core';
import { AcrModalService } from './acr-modal/acr-modal.service';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{ name }}!</h1>
    <br />
    <button (click)="closeModal()"> close </button>
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
  constructor(private acrModal: AcrModalService) {}
  closeModal() {
    this.acrModal.closeModal(this.acrModal.modalObj);
  }
}
