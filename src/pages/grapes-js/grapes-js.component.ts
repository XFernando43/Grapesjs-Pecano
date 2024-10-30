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
      licenseKey: '32038e8cd2764e2b9da3d5985a4049a8ec7abf58784447a0966485ce4dd8f21e',
      root: this.editorEl.nativeElement,
      theme: 'dark',
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
