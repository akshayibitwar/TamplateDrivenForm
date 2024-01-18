import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivformComponent } from './reactivform.component';

describe('ReactivformComponent', () => {
  let component: ReactivformComponent;
  let fixture: ComponentFixture<ReactivformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
