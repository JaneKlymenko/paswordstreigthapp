import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StrangthBarComponent } from './strangth-bar.component';

describe('StrangthBarComponent', () => {
  let component: StrangthBarComponent;
  let fixture: ComponentFixture<StrangthBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrangthBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StrangthBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
