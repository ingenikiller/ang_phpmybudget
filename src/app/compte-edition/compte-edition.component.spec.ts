import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteEditionComponent } from './compte-edition.component';

describe('CompteEditionComponent', () => {
  let component: CompteEditionComponent;
  let fixture: ComponentFixture<CompteEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
