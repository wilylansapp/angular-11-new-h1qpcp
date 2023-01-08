import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcrModalService } from './acr-modal.service';
import { AcrModalComponent } from './acr-modal/acr-modal.component';
import { NewHostDirective } from './new-host.directive';
import { DomService } from './dom.service';
@NgModule({
  imports: [CommonModule],
  declarations: [AcrModalComponent, NewHostDirective],
  providers: [AcrModalService, DomService],
  exports: [AcrModalComponent, NewHostDirective],
})
export class AcrModalModule {
  constructor(
    private domService: DomService,
    private modalService: AcrModalService
  ) {
    console.log('MODULE MODAL ->');
    this.modalService.$opnedModal.subscribe((opened) => {
      console.log(opened);
      if (opened) {
        this.domService.appendComponentToBody(AcrModalComponent);
      } else {
        this.domService.detachComponent();
      }
    });
  }
}
