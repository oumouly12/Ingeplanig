import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileexcelComponent } from './fileexcel.component';

describe('FileexcelComponent', () => {
  let component: FileexcelComponent;
  let fixture: ComponentFixture<FileexcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileexcelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
