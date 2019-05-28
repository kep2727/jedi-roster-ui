import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JediEditComponent } from './jedi-edit.component';

describe('JediEditComponent', () => {
  let component: JediEditComponent;
  let fixture: ComponentFixture<JediEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JediEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JediEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
