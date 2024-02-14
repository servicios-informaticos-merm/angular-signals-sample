import { Component, Signal, effect, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StateService } from '../state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-name-editor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div *ngIf="!!name(); else no_name">
      <form [formGroup]="form" (ngSubmit)="submit()">
        <div>
          <label>
            <span>Name:</span>
            <input type="text" formControlName="name" />
          </label>
        </div>
        <div>
          <button type="submit" [disabled]="!form.valid">Change name</button>
        </div>
      </form>
    </div>
    <ng-template #no_name>
      <p>For this example, you need to set first your name in the parent form.</p>
      <p>The idea is to show how <code>effect()</code> works.</p>
    </ng-template>
  `,
})
export class FirstComponent {

  private readonly fb = inject(FormBuilder);
  private readonly state = inject(StateService);

  public readonly name = this.state.name;
  public readonly form = this.fb.group({
    name: [this.name(), Validators.required]
  });


  constructor() {
    effect(() => {
      this.form.patchValue({ name: this.name() });
    });
  }

  submit() {
    this.name.set(this.form.value.name || '');
    this.form.reset();
  }
}
