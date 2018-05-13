import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllartistsComponent } from './allartists.component';

describe('AllartistsComponent', () => {
  let component: AllartistsComponent;
  let fixture: ComponentFixture<AllartistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllartistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllartistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
