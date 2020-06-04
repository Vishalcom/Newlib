import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroLibraryComponent } from './iro-library.component';

describe('IroLibraryComponent', () => {
  let component: IroLibraryComponent;
  let fixture: ComponentFixture<IroLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
