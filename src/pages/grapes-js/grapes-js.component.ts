import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-preset-newsletter';


// interface MyPluginOptions {
//   opt1: string,
//   opt2?: number,
// }

// const myPlugin2: Plugin<MyPluginOptions> = (editor, options) => {
//   // ...
// }
let tableStyleStr = '';

@Component({
  selector: 'app-grapes-js',
  standalone: true,
  imports: [],
  templateUrl: './grapes-js.component.html',
  styleUrls: ['./grapes-js.component.css']
})
export class GrapesJSComponent implements OnInit {
  @ViewChild('editor', { static: true }) editorContainer!: ElementRef;

  ngOnInit() {
    const editor = grapesjs.init({
      container: this.editorContainer.nativeElement,
      fromElement: true,
      height: '300px',
      width: 'auto',
      panels: {  }, //default:[] sale vacio
      // panels: {
      //   defaults: [
      //     {
      //       id: 'commands',
      //       buttons: [
      //         {
      //           id: 'undo',
      //           className: 'fa fa-undo icon-undo',
      //           command: 'core:undo',
      //           attributes: { title: 'Undo' }
      //         },
      //         {
      //           id: 'redo',
      //           className: 'fa fa-repeat icon-redo',
      //           command: 'core:redo',
      //           attributes: { title: 'Redo' }
      //         },
      //       ]
      //     },
      //     {
      //       id: 'options',
      //       buttons: [
      //         {
      //           id: 'preview',
      //           className: 'fa fa-eye',
      //           command: 'preview',  // Abre el modo de vista previa
      //           attributes: { title: 'Preview' }
      //         },
      //         {
      //           id: 'fullscreen',
      //           className: 'fa fa-arrows-alt',
      //           command: 'fullscreen', // Pantalla completa
      //           attributes: { title: 'Fullscreen' }
      //         },
      //       ]
      //     },
      //     {
      //       id: 'views',
      //       buttons: [
      //         {
      //           id: 'open-layers',
      //           active: true,
      //           className: 'fa fa-bars',
      //           command: 'open-layers', // Abre el panel de capas
      //           attributes: { title: 'Open Layers' }
      //         },
      //         {
      //           id: 'open-blocks',
      //           className: 'fa fa-th-large',
      //           command: 'open-blocks', // Abre el Block Manager
      //           attributes: { title: 'Open Blocks' }
      //         },
      //       ]
      //     },


      //   ]
      // },

      // storageManager: {
      //   type: 'local', // Tipo de almacenamiento (local, remote, etc.)
      //   autosave: true, // Guardar automáticamente
      //   autoload: true, // Cargar automáticamente
      //   stepsBeforeSave: 1, // Guardar cada vez que se detecta un cambio
      // },

      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'section',
            label: '<b>Section</b>',
            attributes: { class: 'gjs-block-section' },
            category: 'Basic',
            content: `<section>
              <h1>This is a simple title</h1>
              <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`,
          },
          {
            id: 'text',
            label: 'Text',
            category: 'Basic',
            content: '<div data-gjs-type="text">Insert your text here</div>',
          },
          {
            id: 'image',
            label: 'Image',
            category: 'Basic',
            select: true,
            content: { type: 'image' },
            activate: true,
          },
          {
            id: 'two-column-block', 
            label: '2 Column Divider', 
            attributes: { class: 'gjs-block-section' },
            content: `
              <div class="row">
                <style>
                    .container{
                        display: flex;
                        flex-direction: row;
                    }
                </style>
                <div class="container">
                    <div class="column" style="width: 50%; padding: 10px;">
                        <p>Left Column</p>
                    </div>
                    <div class="column" style="width: 50%; padding: 10px;">
                        <p>Right Column</p>
                    </div>
                </div>
            </div>
              `,
            category: 'Basic', // Categoría del bloque en el Block Manager
          },
          {
            id: '5-column-block', // Identificador único del bloque
            label: '5 Column Divider', // El nombre del bloque que aparecerá en el block manager
            attributes: { class: 'gjs-block-section' }, // Estilos opcionales
            content: `
                  <div class="container">
                      <div class="column" style="width: 50%; padding: 10px; background-color: red;">
                          <p>Left Column</p>
                      </div>
                      <div class="column" style="width: 50%; padding: 10px; background-color: orange;">
                          <p>Right Column</p>
                      </div>
                      <div class="column" style="width: 50%; padding: 10px; background-color: green;">
                          <p>Right Column</p>
                      </div>
                      <div class="column" style="width: 50%; padding: 10px; background-color: black;">
                          <p>Right Column</p>
                      </div>
                      <div class="column" style="width: 50%; padding: 10px; background-color: purple;">
                          <p>Right Column</p>
                      </div>
                  </div>
            `,
            category: 'Basic', // Categoría del bloque en el Block Manager
          },
          {
            id: '5-column-block', // Identificador único del bloque
            label: '5 Column Divider', // El nombre del bloque que aparecerá en el block manager
            attributes: { class: 'gjs-block-section' }, // Estilos opcionales
            content: `
                  <div class="container">
        <div class="column" style="width: 50%; padding: 10px; background-color: red;">
            <p>Left Column</p>
        </div>
        <div class="column" style="width: 50%; padding: 10px; background-color: orange;">
            <p>Right Column</p>
        </div>
        <div class="column" style="width: 50%; padding: 10px; background-color: green;">
            <p>Right Column</p>
        </div>
        <div class="column" style="width: 50%; padding: 10px; background-color: black;">
            <p>Right Column</p>
        </div>
        <div class="column" style="width: 50%; padding: 10px; background-color: purple;">
            <p>Right Column</p>
        </div>
    </div>
            `,
            category: 'Basic', // Categoría del bloque en el Block Manager
          },
          {
            id: '12-column-block', // Identificador único del bloque
            label: '12 Column Divider', // El nombre del bloque que aparecerá en el block manager
            attributes: { class: 'gjs-block-section' }, // Estilos opcionales
            content: `
            
            <div class="container">
            <div class="column" style="width: 8.33%; padding: 10px; background-color: #FFDDC1;">
              <p>Column 1</p>
            </div>
            <div class="column" style="width: 8.33%; padding: 10px; background-color: #FFABAB;">
              <p>Column 2</p>
            </div>
            <div class="column" style="width: 8.33%; padding: 10px; background-color: #FFC3A0;">
              <p>Column 3</p>
            </div>
            <div class="column" style="width: 8.33%; padding: 10px; background-color: #FF677D;">
              <p>Column 4</p>
            </div>
            <div class="column" style="width: 8.33%; padding: 10px; background-color: #D4A5A5;">
              <p>Column 5</p>
            </div>
            <div class="column" style="width: 8.33%; padding: 10px; background-color: #392F5A;">
              <p>Column 6</p>
            </div>
            <div class="column" style="width: 8.33%; padding: 10px; background-color: #31A2AC;">
              <p>Column 7</p>
            </div>
            <div class="column" style="width: 8.33%; padding: 10px; background-color: #61C0BF;">
              <p>Column 8</p>
            </div>
            <div class="column" style="width: 8.33%; padding: 10px; background-color: #6B4226;">
              <p>Column 9</p>
            </div>
            <div class="column" style="width: 8.33%; padding: 10px; background-color: #D9BF77;">
              <p>Column 10</p>
            </div>
            <div class="column" style="width: 8.33%; padding: 10px; background-color: #ACD8AA;">
              <p>Column 11</p>
            </div>
            <div class="column" style="width: 8.33%; padding: 10px; background-color: #FFD166;">
              <p>Column 12</p>
            </div>
          </div>

            `,
            category: 'Basic', // Categoría del bloque en el Block Manager
          },
        ]
      },
   

      // plugins: [plugin],
      // pluginsOpts: {
      //   [plugin]: { /* options */ }
      // }
      // // or
      // plugins: [
      //   editor => plugin(editor, { /* options */ }),
      // ],


    });

    // agrgar por categorias
    // editor.BlockManager.add('h1-block', {
    //   label: 'Heading',
    //   content: '<h1>Put your title here</h1>',
    //   category: 'Basic',
    //   attributes: {
    //     title: 'Insert h1 block'
    //   }
    // });

    // editor.BlockManager.add('h2-block', {
    //   label: 'asdamkmlad',
    //   content: '<h1>Put your dasd here</h1>',
    //   category: 'Advance',
    //   attributes: {
    //     title: 'Insertdasdlock'
    //   }
    // });






    // editor.BlockManager.add('sect100', {
    //   label: '1 Section',
    //   media: `<svg viewBox="0 0 24 24">
    //     <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>
    //   </svg>`,
    //   content: `
    //     <table style="">
    //       <tr>
    //         <td style=""></td>
    //       </tr>
    //     </table>
    //   `,
    // });
  
    // editor.BlockManager.add('sect50', {
    //   label: '1/2 Section',
    //   media: `<svg viewBox="0 0 23 24">
    //     <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
    //   </svg>`,
    //   content: `
    //     <table style="${tableStyleStr}">
    //       <tr>
    //         <td style=" width: 50%"></td>
    //         <td style=" width: 50%"></td>
    //       </tr>
    //     </table>
    //   `,
    // });
  
    // editor.BlockManager.add('sect30', {
    //   label: '1/3 Section',
    //   media: `<svg viewBox="0 0 23 24">
    //     <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"/>
    //   </svg>`,
    //   content: `
    //     <table style="${tableStyleStr}">
    //       <tr>
    //         <td style=" width: 33.3333%"></td>
    //         <td style=" width: 33.3333%"></td>
    //         <td style=" width: 33.3333%"></td>
    //       </tr>
    //     </table>
    //   `,
    // });
  
    // editor.BlockManager.add('sect37', {
    //   label: '3/7 Section',
    //   media: `<svg viewBox="0 0 24 24">
    //     <path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"></path>
    //   </svg>`,
    //   content: `
    //     <table style="${tableStyleStr}">
    //       <tr>
    //         <td style=" width:30%"></td>
    //         <td style=" width:70%"></td>
    //       </tr>
    //     </table>
    //   `,
    // });
  
    // editor.BlockManager.add('button', {
    //   label: 'Button',
    //   media: `<svg viewBox="0 0 24 24">
    //       <path fill="currentColor" d="M20 20.5C20 21.3 19.3 22 18.5 22H13C12.6 22 12.3 21.9 12 21.6L8 17.4L8.7 16.6C8.9 16.4 9.2 16.3 9.5 16.3H9.7L12 18V9C12 8.4 12.4 8 13 8S14 8.4 14 9V13.5L15.2 13.6L19.1 15.8C19.6 16 20 16.6 20 17.1V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H8V12H4V4H20V12H18V14H20C21.1 14 22 13.1 22 12V4C22 2.9 21.1 2 20 2Z" />
    //   </svg>`,
    //   content: '<a class="button">Button</a>',
    // });
  
    // editor.BlockManager.add('divider', {
    //   label: 'Divider',
    //   media: `<svg viewBox="0 0 24 24">
    //       <path fill="currentColor" d="M21 18H2V20H21V18M19 10V14H4V10H19M20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8M21 4H2V6H21V4Z" />
    //   </svg>`,
    //   content: `
    //     <table style="width: 100%; margin-top: 10px; margin-bottom: 10px;">
    //       <tr>
    //         <td class="divider"></td>
    //       </tr>
    //     </table>
    //     <style>
    //       .divider {
    //         background-color: rgba(0, 0, 0, 0.1);
    //         height: 1px;
    //       }
    //     </style>
    //   `,
    // });
  
    // editor.BlockManager.add('text', {
    //   label: 'Text',
    //   media: `<svg viewBox="0 0 24 24">
    //     <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
    //   </svg>`,
    //   activate: true,
    //   content: {
    //     type: 'text',
    //     content: 'Insert your text here',
    //     style: { padding: '10px' },
    //   },
    // });
  
    // editor.BlockManager.add('text-sect', {
    //   label: 'Text Section',
    //   media: `<svg viewBox="0 0 24 24">
    //       <path fill="currentColor" d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z" />
    //   </svg>`,
    //   content: `
    //     <h1 class="heading">Insert title here</h1>
    //     <p class="paragraph">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
    //     </p>
    //   `,
    // });
  
    // editor.BlockManager.add('image', {
    //   label: 'Image',
    //   media: `<svg viewBox="0 0 24 24">
    //     <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />
    //   </svg>`,
    //   activate: true,
    //   content: {
    //     type:'image',
    //     style: { color:'black' },
    //   },
    // });
  
    // editor.BlockManager.add('quote', {
    //   label: 'Quote',
    //   media: `<svg viewBox="0 0 24 24">
    //       <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
    //   </svg>`,
    //   content: '<blockquote class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</blockquote>',
    // });
  
    // editor.BlockManager.add('link', {
    //   label: 'Link',
    //   media: `<svg viewBox="0 0 24 24">
    //     <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>
    //   </svg>`,
    //   content: {
    //     type: 'link',
    //     content: 'Link',
    //     style: { color:'#3b97e3' }
    //   },
    // });
  
    // editor.BlockManager.add('link-block', {
    //   label: 'Link Block',
    //   media: `<svg viewBox="0 0 24 24">
    //     <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>
    //   </svg>`,
    //   content: {
    //     type: 'link',
    //     editable: false,
    //     droppable: true,
    //     style: {
    //       display: 'inline-block',
    //       padding: '5px',
    //       'min-height': '50px',
    //       'min-width': '50px'
    //     }
    //   },
    // });
  
    // const gridItem =`<table class="grid-item-card">
    //     <tr>
    //       <td class="grid-item-card-cell">
    //         <img class="grid-item-image" src="https://via.placeholder.com/250x150/78c5d6/fff/" alt="Image"/>
    //         <table class="grid-item-card-body">
    //           <tr>
    //             <td class="grid-item-card-content">
    //               <h1 class="card-title">Title here</h1>
    //               <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
    //             </td>
    //           </tr>
    //         </table>
    //       </td>
    //     </tr>
    //   </table>`;
  
    // editor.BlockManager.add('grid-items', {
    //   label: 'Grid Items',
    //   media: `<svg viewBox="0 0 24 24">
    //     <path fill="currentColor" d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"/>
    //   </svg>`,
    //   content: `
    //     <table class="grid-item-row">
    //       <tr>
    //         <td class="grid-item-cell2-l">${gridItem}</td>
    //         <td class="grid-item-cell2-r">${gridItem}</td>
    //       </tr>
    //     </table>
    //   `,
    // });
  
    // const listItem =
    //   `<table class="list-item">
    //     <tr>
    //       <td class="list-item-cell">
    //         <table class="list-item-content">
    //           <tr class="list-item-row">
    //             <td class="list-cell-left">
    //               <img class="list-item-image" src="https://via.placeholder.com/150/78c5d6/fff" alt="Image"/>
    //             </td>
    //             <td class="list-cell-right">
    //               <h1 class="card-title">Title here</h1>
    //               <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
    //             </td>
    //           </tr>
    //         </table>
    //       </td>
    //     </tr>
    //   </table>`;
  
    // editor.BlockManager.add('list-items', {
    //   label: 'List Items',
    //   media: `<svg viewBox="0 0 24 24">
    //     <path fill="currentColor" d="M2 14H8V20H2M16 8H10V10H16M2 10H8V4H2M10 4V6H22V4M10 20H16V18H10M10 16H22V14H10"/>
    //   </svg>`,
    //   content: listItem + listItem,
    // });





    









    // editor.DomComponents.addType('my-input-type', {
    //   isComponent: el => el.tagName === 'INPUT',

    //   // Model definition
    //   model: {
    //     // Default properties
    //     defaults: {
    //       tagName: 'input',
    //       draggable: 'form, form *', // Can be dropped only inside `form` elements
    //       droppable: false, // Can't drop other elements inside
    //       attributes: { // Default attributes
    //         type: 'text',
    //         name: 'default-name',
    //         placeholder: 'Insert text here',
    //       },
    //       traits: [
    //         'name',
    //         'placeholder',
    //         { type: 'checkbox', name: 'required' },
    //       ],
    //     }
    //   }
    // });

    // const domc = editor.DomComponents;


    // domc.addType('component-css', {
    //   model: {
    //     defaults: {
    //       attributes: { class: 'cmp-css' },
    //       components: `
    //         <span>Component with styles<span>
    //         <div class="cmp-css-a">Component A</div>
    //         <div class="cmp-css-b">Component B</div>
    //       `,
    //       styles: `
    //         .cmp-css { color: red }
    //         .cmp-css-a { color: green }
    //         .cmp-css-b { color: blue }

    //         @media (max-width: 992px) {
    //           .cmp-css{ color: darkred; }
    //           .cmp-css-a { color: darkgreen }
    //           .cmp-css-b { color: darkblue }
    //         }
    //       `,
    //     },
    //   },
    // });


    // //paneles la parte que esta arriba

    // const panelManager = editor.Panels;

    // console.log(panelManager.getPanels());


    // const newButton = panelManager.addButton('myNewPanel',{
    //   id: 'myNewButton',
    //   className: 'someClass',
    //   command: 'someCommand',
    //   attributes: { title: 'Some title'},
    //   active: false,
    // });


    // const newPanel = panelManager.addPanel({
    //   id: 'new_Panel',
    //   visible: true,  // Define si el panel es visible por defecto
    //   buttons: [
    //     {
    //       id: 'my-first-button',  // ID único para el botón
    //       className: 'btn-first',  // Clase CSS opcional
    //       label: 'First Button',   // Texto que aparecerá en el botón
    //       command: 'some-command', // El comando que se ejecutará al hacer clic
    //       attributes: { title: 'First Button' }, // Atributos opcionales como 'title'
    //       active: false,  // Define si el botón estará activo por defecto
    //     },
    //     {
    //       id: 'my-second-button',
    //       className: 'btn-second',
    //       label: 'Second Button',
    //       command: 'another-command',  // Otro comando personalizado
    //       attributes: { title: 'Second Button' },
    //       active: false,
    //     }
    //   ]
    // });

  }



}
