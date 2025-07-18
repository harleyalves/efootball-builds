import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildUploadComponent } from './build-upload.component';

describe('BuildUploadComponent', () => {
  let component: BuildUploadComponent;
  let fixture: ComponentFixture<BuildUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
