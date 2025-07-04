import { Component, input, signal, computed } from '@angular/core';
import { IStep } from '../istep';

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
    this.currentStep.update( () => num );
  }
}
