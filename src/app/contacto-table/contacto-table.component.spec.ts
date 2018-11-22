import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoTableComponent } from './contacto-table.component';

describe('ContactoTableComponent', () => {
  let component: ContactoTableComponent;
  let fixture: ComponentFixture<ContactoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
