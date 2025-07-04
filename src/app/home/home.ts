import { Component, inject, signal } from '@angular/core';
import { Scene } from './scene/scene';
import { Steps } from './steps';

@Component({
  selector: 'app-home',
  imports: [Scene],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  providers: [Steps],
})
export class Home {
  stepsServ = inject(Steps);
  steps = signal(this.stepsServ.list);
}
