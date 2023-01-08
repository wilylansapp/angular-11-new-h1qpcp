import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AcrModalConfig, AcrModalObject } from './modal.interface';

@Injectable()
export class AcrModalService {
  public modalObj: AcrModalObject = null;
  public $opnedModal: Subject<boolean> = new Subject();
  public $modalObj: BehaviorSubject<AcrModalObject> = new BehaviorSubject(null);

  private modalId: number = 0;
  constructor() {}

  // Création de la modal
  createModal(config: AcrModalConfig) {
    this.modalId = this.modalId + 1;
    const id = this.modalId;
    config.id = id;
    const modalObj = new AcrModalObject(config);
    if (config.data) {
      modalObj.data.next(config.data);
    }
    this.modalObj = modalObj;
    return modalObj;
  }

  private emitModalObj() {
    this.$modalObj.next(this.modalObj);
  }
  // ouverture de la modal
  public openModal(modal: AcrModalObject) {
    modal.actif = true;
    // permet d'envoyer l'ouverture au module pour qu'il puisse lancer le DOM service
    this.$opnedModal.next(true);
    this.emitModalObj();
    return this.modalObj.afterClose;
  }

  public closeModal(data?: any) {
    if (data) {
      // emit la data aprés la fermeture
      this.modalObj.afterClose.next(data);
      // désinscrire la subscription
      this.modalObj.afterClose.unsubscribe();
    }
    this.modalObj.actif = false;
    this.$opnedModal.next(false);
    this.emitModalObj();
  }
}
