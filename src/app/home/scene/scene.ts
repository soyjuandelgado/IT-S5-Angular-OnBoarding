import { Component, input, signal, computed } from '@angular/core';
import { IStep } from '../istep';

import { gsap } from "gsap";

@Component({
  selector: 'app-scene',
  imports: [],
  templateUrl: './scene.html',
  styleUrl: './scene.scss',
})
export class Scene {
  currentStep = signal(0);
  steps = input<Array<IStep>>([
  {
    title: 'Dedica moltes hores',
    description: `Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible,
però notaràs una millora ràpidament.`,
    img: '',
    bgcolor: '',
  }]);
  step = computed(() => this.steps()[this.currentStep()]);

  changeStep(num: number){
    gsap.to(".card-container", {opacity:0, duration:0.3, onComplete: () => {
      this.updateCurrent(num );
      gsap.to(".card-container", {opacity:1, duration:0.3, delay:0.1});
    }});
  }

  updateCurrent(num: number){
      this.currentStep.update( () => num );
  }
}
