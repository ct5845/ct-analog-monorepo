import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibOneComponent } from './libOne.component';

describe('LibOneComponent', () => {
  let component: LibOneComponent;
  let fixture: ComponentFixture<LibOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
