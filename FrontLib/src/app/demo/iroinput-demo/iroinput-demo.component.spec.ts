import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroinputDemoComponent } from './iroinput-demo.component';

describe('IroinputDemoComponent', () => {
  let component: IroinputDemoComponent;
  let fixture: ComponentFixture<IroinputDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroinputDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroinputDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
