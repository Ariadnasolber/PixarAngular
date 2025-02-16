import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFilmComponent } from './dynamic-film.component';

describe('DynamicFilmComponent', () => {
  let component: DynamicFilmComponent;
  let fixture: ComponentFixture<DynamicFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFilmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
