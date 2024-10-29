import 'grapesjs/dist/css/grapes.min.css';

import 'zone.js';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import createStudioEditor from '@grapesjs/studio-sdk';
import '@grapesjs/studio-sdk/dist/style.css';

@Component({
  selector: 'app-grapes-js',
  standalone: true,
  imports: [],
  templateUrl: './grapes-js.component.html',
  styleUrls: ['./grapes-js.component.css']
})
export class GrapesJSComponent implements OnInit {
  @ViewChild('editorEl', { static: true }) editorEl!: ElementRef;

  ngOnInit() {
    createStudioEditor({
      licenseKey: 'YOUR_LICENSE_KEY',
      root: this.editorEl.nativeElement,
      project: {
        default: {
          pages: [
            {
              name: 'Home',
              component: `<h1 style="padding: 2rem; text-align: center">
                Hello Studio 👋
              </h1>`,
            },
          ],
        },
      },
    });
  }


}
