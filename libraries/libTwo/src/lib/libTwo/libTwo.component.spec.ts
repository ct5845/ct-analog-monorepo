import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibTwoComponent } from './libTwo.component';

describe('LibTwoComponent', () => {
  let component: LibTwoComponent;
  let fixture: ComponentFixture<LibTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibTwoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
