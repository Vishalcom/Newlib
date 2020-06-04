import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrobuttonDemoComponent } from './irobutton-demo.component';

describe('IrobuttonDemoComponent', () => {
  let component: IrobuttonDemoComponent;
  let fixture: ComponentFixture<IrobuttonDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrobuttonDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrobuttonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
