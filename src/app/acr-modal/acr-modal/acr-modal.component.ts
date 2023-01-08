import {
  animate,
  animateChild,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  HostBinding,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { AcrModalService } from '../acr-modal.service';
import { DomService } from '../dom.service';
import { AcrModalObject } from '../modal.interface';
import { NewHostDirective } from '../new-host.directive';

@Component({
  selector: 'acr-modal',
  templateUrl: './acr-modal.component.html',
  styleUrls: ['./acr-modal.component.css'],
  animations: [
    trigger('host', [
      transition(':leave', [query('@backdrop,@box', [animateChild()])]),
      transition(':enter', [query('@backdrop,@box', [animateChild()])]),
    ]),
    trigger('box', [
      transition(':leave', [
        style({
          transform: 'scale(1)',
        }),
        animate(
          '100ms ease-out',
          style({
            transform: 'scale(1.2)',
          })
        ),
        animate(
          '300ms ease-in',
          style({
            transform: 'scale(0)',
          })
        ),
      ]),
      transition(':enter', [
        style({
          transform: 'scale(0.5)',
        }),
        animate(
          '200ms ease-out',
          style({
            transform: 'scale(1.2)',
          })
        ),
        animate(
          '100ms ease-out',
          style({
            transform: 'scale(1)',
          })
        ),
      ]),
    ]),
    trigger('backdrop', [
      transition(':leave', [
        style({
          opacity: 1,
        }),
        animate(
          '230ms ease-in',
          style({
            opacity: 0,
          })
        ),
      ]),
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate(
          '230ms ease-in',
          style({
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})
export class AcrModalComponent implements OnInit, AfterViewInit {
  @ViewChild(NewHostDirective, { static: true })
  newsHost: NewHostDirective;
  componentRef;
  constructor(
    private acrModal: AcrModalService,
    private cf: ComponentFactoryResolver,
    private elementRef: ElementRef
  ) {}
  ngAfterViewInit(): void {}
  ngOnInit() {
    this.acrModal.$modalObj.subscribe((modal: AcrModalObject) => {
      this.createComponent(modal);
    });
  }

  createComponent(modal: AcrModalObject) {
    const componentFactory = this.cf.resolveComponentFactory(
      modal.config.component
    );
    const viewContainerRef = this.newsHost.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
    this.componentRef.instance['name'] = 'bats les couilles';
  }
}
