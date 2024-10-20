import { Component, OnInit } from '@angular/core';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';

@Component({
  selector: 'app-grapes-js',
  standalone: true,
  imports: [],
  templateUrl: './grapes-js.component.html',
  styleUrls: ['./grapes-js.component.css'] // Corregido a styleUrls
})
export class GrapesJSComponent implements OnInit {

  ngOnInit() { // Corregido a ngOnInit
    const editor = grapesjs.init({
      container: '#gjs',
      fromElement: true,
      height: '300px',
      width: 'auto',
      storageManager: false,
      panels: { defaults: [] },
      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'section',
            label: '<b>Section</b>',
            attributes: { class: 'gjs-block-section' },
            content: `<section>
              <h1>This is a simple title</h1>
              <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`,
          },
          {
            id: 'text',
            label: 'Text',
            content: '<div data-gjs-type="text">Insert your text here</div>',
          },
          {
            id: 'image',
            label: 'Image',
            select: true,
            content: { type: 'image' },
            activate: true,
          }
        ]
      },
    });


    editor.BlockManager.add('h1-block', {
      label: 'Heading',
      content: '<h1>Put your title here</h1>',
      category: 'Basic',
      attributes: {
        title: 'Insert h1 block'
      }
    });
    }

}
