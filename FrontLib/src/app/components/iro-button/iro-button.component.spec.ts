import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroButtonComponent } from './iro-button.component';

describe('IroButtonComponent', () => {
  let component: IroButtonComponent;
  let fixture: ComponentFixture<IroButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
