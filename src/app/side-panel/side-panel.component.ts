import { Component, inject } from '@angular/core';
import { StateService } from '../state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p *ngIf="name(); else no_name">
      Welcome: {{ state.name() }}
    </p>
    <p>
      Color: <span [ngStyle]="{ 'color': state.color() }">{{ state.color() }}</span>
    </p>
    <ng-template #no_name>
      <p>please set your name</p>
    </ng-template>
  `,
  styles: ``
})
export class SidePanelComponent {

  state = inject(StateService);
  name = this.state.name;

}
