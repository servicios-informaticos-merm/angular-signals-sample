import { Component } from '@angular/core';
import { ColorEditorComponent } from "../color-editor/color-editor.component";

@Component({
    selector: 'app-second',
    standalone: true,
    template: `
    <h3>Choose your favorite color:</h3>
    <app-color-editor />
    `,
    styles: ``,
    imports: [ColorEditorComponent]
})
export class SecondComponent {

}
