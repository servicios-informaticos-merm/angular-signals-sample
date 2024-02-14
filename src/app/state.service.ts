import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  name = signal('');
  color = signal('red');

  constructor() { }
}
