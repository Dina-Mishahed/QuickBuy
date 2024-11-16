import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedMainComponent } from './shared-main.component';

describe('SharedMainComponent', () => {
  let component: SharedMainComponent;
  let fixture: ComponentFixture<SharedMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
