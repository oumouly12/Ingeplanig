import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilegeomComponent } from './filegeom.component';

describe('FilegeomComponent', () => {
  let component: FilegeomComponent;
  let fixture: ComponentFixture<FilegeomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilegeomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilegeomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
