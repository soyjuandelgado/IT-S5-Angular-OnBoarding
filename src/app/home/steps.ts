import { Injectable } from '@angular/core';
import { IStep } from './istep';

@Injectable({
  providedIn: 'root',
})
export class Steps {
  steps: IStep[] = [];
  current = 0;
  constructor() {}

  getCurrent() {
    return this.current;
  }
}
