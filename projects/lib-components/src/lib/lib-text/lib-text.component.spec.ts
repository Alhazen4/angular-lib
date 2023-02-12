import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibTextComponent } from './lib-text.component';

describe('LibTextComponent', () => {
  let component: LibTextComponent;
  let fixture: ComponentFixture<LibTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
