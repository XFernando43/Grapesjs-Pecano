import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapesJSComponent } from './grapes-js.component';

describe('GrapesJSComponent', () => {
  let component: GrapesJSComponent;
  let fixture: ComponentFixture<GrapesJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrapesJSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrapesJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
