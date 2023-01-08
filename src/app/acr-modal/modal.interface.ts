import { Type } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface AcrModalConfig {
  name: string;
  component: any;
  height: number;
  width: number;
  actif?: boolean;
  position?: boolean;
  id?: number;
}

export class AcrModalObject {
  public config: AcrModalConfig;
  public actif: boolean = true;
  constructor(config: AcrModalConfig) {
    this.config = config;
    this.actif = this.config.actif ? this.config.actif : true;
  }
}
