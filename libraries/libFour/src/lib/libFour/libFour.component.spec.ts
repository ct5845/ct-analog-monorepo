import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibFourComponent } from './libFour.component';

describe('LibFourComponent', () => {
  let component: LibFourComponent;
  let fixture: ComponentFixture<LibFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibFourComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
