import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroInputboxComponent } from './iro-inputbox.component';

describe('IroInputboxComponent', () => {
  let component: IroInputboxComponent;
  let fixture: ComponentFixture<IroInputboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroInputboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroInputboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
