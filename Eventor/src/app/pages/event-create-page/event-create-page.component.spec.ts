import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreatePageComponent } from './event-create-page.component';

describe('EventCreatePageComponent', () => {
  let component: EventCreatePageComponent;
  let fixture: ComponentFixture<EventCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
