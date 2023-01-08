import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[NewHost]',
})
export class NewHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
