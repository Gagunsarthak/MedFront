import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSideNavBarComponent } from './app-side-nav-bar.component';

describe('AppSideNavBarComponent', () => {
  let component: AppSideNavBarComponent;
  let fixture: ComponentFixture<AppSideNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSideNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSideNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
