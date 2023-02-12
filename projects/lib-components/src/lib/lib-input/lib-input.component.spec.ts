import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibInputComponent } from './lib-input.component';

describe('LibInputComponent', () => {
  let component: LibInputComponent;
  let fixture: ComponentFixture<LibInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
