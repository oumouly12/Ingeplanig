import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaptacheComponent } from './maptache.component';

describe('MaptacheComponent', () => {
  let component: MaptacheComponent;
  let fixture: ComponentFixture<MaptacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaptacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaptacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
