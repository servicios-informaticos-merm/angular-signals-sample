import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NameEditorComponent,
    SidePanelComponent,
  ],
  template: `
    <div class="left">
      <app-name-editor />
      <ul>
        <li> load components: </li>
        <li><a routerLink="/">home</a></li>
        <li><a routerLink="/first">first</a></li>
        <li><a routerLink="/second">second</a></li>
      </ul>
      <router-outlet />
    </div>
    <div class="right">
      <app-side-panel />
    </div>
  `,
  styles: [
    `
      .left {
        float: left;
        width: 80%;
      }
      .right {
        float: right;
        width: 20%;
      }
      ul > li {
        display: inline;
        margin-right: 10px;
      }
    `
  ]
})
export class AppComponent {

}
