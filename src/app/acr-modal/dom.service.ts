import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
} from '@angular/core';
import { AcrModalService } from './acr-modal.service';

@Injectable()
export class DomService {
  componentRef: any;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private modalService: AcrModalService
  ) {}

  openModal(component: any) {
    this.modalService.$opnedModal.subscribe((opened) => {
      if (opened) {
        this.appendComponentToBody(component);
      } else {
        this.detachComponent();
      }
    });
  }
  appendComponentToBody(component: any) {
    // 1. Create a component reference from the component
    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);
    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(this.componentRef.hostView);

    // 3. Get DOM element from component
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    console.log(domElem);
    // 4. Append DOM element to the body
    document.body.appendChild(domElem);
  }

  detachComponent() {
    if (this.componentRef.hostView) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
    }
  }
}
