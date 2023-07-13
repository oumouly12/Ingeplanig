import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapplanifComponent } from './mapplanif.component';

describe('MapplanifComponent', () => {
  let component: MapplanifComponent;
  let fixture: ComponentFixture<MapplanifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapplanifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapplanifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
