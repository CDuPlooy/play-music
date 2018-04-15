import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongcardsComponent } from './songcards.component';

describe('SongcardsComponent', () => {
  let component: SongcardsComponent;
  let fixture: ComponentFixture<SongcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
