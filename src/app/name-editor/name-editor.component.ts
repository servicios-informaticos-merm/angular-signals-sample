import { Component, Signal, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StateService } from '../state.service';

@Component({
  selector: 'app-name-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <div>
        <label>
          <span>Name:</span>
          <input type="text" formControlName="name" />
        </label>
      </div>
      <div>
        <button type="submit" [disabled]="!form.valid">Change name</button>
        <button type="button" [disabled]="!name()" (click)="edit()">Edit name ({{name()}})</button>
      </div>
    </form>
  `,
  styles: ``,
})
export class NameEditorComponent {

  private readonly fb = inject(FormBuilder);
  private readonly state = inject(StateService);

  public readonly name = this.state.name;
  public readonly form = this.fb.group({
    name: [this.name(), Validators.required]
  });

  submit() {
    this.name.set(this.form.value.name || '');
    this.form.reset();
  }

  edit() {
    this.form.setValue({ name: this.name() });
  }
}
