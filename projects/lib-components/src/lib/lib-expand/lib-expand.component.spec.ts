import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibExpandComponent } from './lib-expand.component';

describe('LibExpandComponent', () => {
  let component: LibExpandComponent;
  let fixture: ComponentFixture<LibExpandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibExpandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
