import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListScreenComponent } from './event-list-screen.component';

describe('EventListScreenComponent', () => {
  let component: EventListScreenComponent;
  let fixture: ComponentFixture<EventListScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventListScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventListScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
