import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSessionsComponent } from './store-sessions.component';

describe('StoreSessionsComponent', () => {
  let component: StoreSessionsComponent;
  let fixture: ComponentFixture<StoreSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
