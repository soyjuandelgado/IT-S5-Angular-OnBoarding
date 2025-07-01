import { Component } from '@angular/core';
import { Scene } from './scene/scene';
import { Steps } from './steps';

@Component({
  selector: 'app-home',
  imports: [Scene],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  
}
