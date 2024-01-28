import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibThreeComponent } from './libThree.component';

describe('LibThreeComponent', () => {
  let component: LibThreeComponent;
  let fixture: ComponentFixture<LibThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibThreeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
