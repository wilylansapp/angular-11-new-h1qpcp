import { Component, OnInit, VERSION } from '@angular/core';
import { AcrModalService } from './acr-modal/acr-modal.service';
import { AcrModalConfig } from './acr-modal/modal.interface';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  constructor(private acrModal: AcrModalService) {
    const acrModalConfig: AcrModalConfig = {
      name: 'hey',
      component: HelloComponent,
      height: 70,
      width: 80,
    };
    const modal = this.acrModal.createModal(acrModalConfig);
  }
  ngOnInit(): void {}
  openModal() {
    const data = {
      name: 'walid',
      number: 15,
      celib: false,
    };
    const acrModalConfig2: AcrModalConfig = {
      name: 'hey',
      component: HelloComponent,
      height: 70,
      width: 80,
      data: data,
    };
    const modal2 = this.acrModal.createModal(acrModalConfig2);

    this.acrModal.openModal(modal2).subscribe((data) => {
      console.log('data afterclose', data);
    });
  }
}
