import { Type } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface AcrModalConfig {
  name: string;
  component: any;
  height: number;
  width: number;
  data?: any;
  actif?: boolean;
  position?: boolean;
  id?: number;
}

export class AcrModalObject {
  public config: AcrModalConfig;
  public actif: boolean;
  public afterClose = new Subject();
  public data = new Subject();
  constructor(config: AcrModalConfig) {
    this.config = config;
  }
}
