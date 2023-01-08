import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AcrModalComponent } from './acr-modal/acr-modal.component';
import { DomService } from './dom.service';
import { AcrModalConfig, AcrModalObject } from './modal.interface';

@Injectable()
export class AcrModalService {
  private modalObj: AcrModalObject = null;
  public $opnedModal: Subject<boolean> = new Subject();
  public $modalObj: BehaviorSubject<AcrModalObject> = new BehaviorSubject(null);

  private modalId: number = 0;
  constructor() {}

  createModal(config: AcrModalConfig) {
    this.modalId = this.modalId + 1;
    const id = this.modalId;
    config.id = id;
    const modalObj = new AcrModalObject(config);
    this.modalObj = modalObj;
    return modalObj;
  }

  private emitModalObj() {
    this.$modalObj.next(this.modalObj);
  }

  public openModal(modal: AcrModalObject) {
    this.modalObj.actif = true;
    this.$opnedModal.next(true);
    this.emitModalObj();
  }

  public closeModal(modal: AcrModalObject) {
    console.log('close');
    this.modalObj.actif = false;
    this.$opnedModal.next(false);
    this.emitModalObj();
  }
}
