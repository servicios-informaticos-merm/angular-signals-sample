import { Component, inject } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-color-editor',
  standalone: true,
  imports: [],
  template: `
    <select [value]="color()" (change)="changeColor($event)">
      <option>red</option>
      <option>green</option>
      <option>blue</option>
    </select>
  `,
  styles: ``
})
export class ColorEditorComponent {

  private readonly state = inject(StateService);
  public readonly color = this.state.color;

  changeColor(event: Event) {
    this.color.set((event.target as HTMLSelectElement).value || '');
  }

}
