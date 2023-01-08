import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AcrModalComponent } from './acr-modal/acr-modal.component';
import { DomService } from './dom.service';
import { AcrModalConfig, AcrModalObject } from './modal.interface';

@Injectable()
export class AcrModalService {
  private modalObj: AcrModalObject = null;
  public $modalObj: BehaviorSubject<AcrModalObject> = new BehaviorSubject(null);

  private modalId: number = 0;
  constructor() {}

  createModal(config: AcrModalConfig) {
    this.modalId = this.modalId + 1;
    const id = this.modalId;
    config.id = id;
    console.log(this.modalId);
    const modalObj = new AcrModalObject(config);
    this.modalObj = modalObj;
    this.emitModalObj();
    return modalObj;
  }

  private emitModalObj() {
    this.$modalObj.next(this.modalObj);
  }

  public openModal(modal: AcrModalObject) {
    console.log('open');
    this.modalObj.actif = true;
  }

  public closeModal(modal: AcrModalObject) {
    console.log('close');
    this.modalObj.actif = false;
  }
}
