import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPageComponent } from './event-page.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { EventService } from 'src/app/sevices/event.service';
import { EventDetailsComponent } from 'src/app/components/events/event-details/event-details.component';
import { Component, Input } from '@angular/core';
import { MockComponent } from 'ng-mocks';


let testEvent = {
  id: 1,
  name: 'Test Event',
  location: {
    city: 'Rosmalen'
  }
}

//mock met jasmine
let mockEventService =  jasmine.createSpyObj('EventService', ['getEvent']);

//mock met de hand
let mockRouteService =  {
  snapshot: { paramMap: { get: () => testEvent.id }}
}

//met ng-mock
let mockEventDetailsComponent = MockComponent(EventDetailsComponent)

//(of als alternatief met de hand)
//Dit kan makkelijker met de package ng-mocks (npm install ng-mocks)
@Component({
  selector: 'app-event-details',
  template: '',
  styleUrls: []
})
class MockEventDetailsComponent
{
  @Input()
  public event: any;
}

describe('EventPageComponent', () => {
  let component: EventPageComponent;
  let fixture: ComponentFixture<EventPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: EventService, useValue: mockEventService},
      ],
      imports: [
        RouterTestingModule
      ],  
      declarations: [ 
        EventPageComponent, 
        //MockEventDetailsComponent
        mockEventDetailsComponent //eerder gemaakt object
      ]
    })
    .compileComponents();

  });

  it('should create', () => {

    //arrange

    //act
    fixture = TestBed.createComponent(EventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //assert
    expect(component).toBeTruthy();
  });

  it('should show the titel of the event', () => {

    //arrange
    mockEventService.getEvent.and.returnValue(of(testEvent));

   
    //act
    fixture = TestBed.createComponent(EventPageComponent);
    let compiled = fixture.nativeElement;
    fixture.detectChanges();

    //assert
    expect(compiled.querySelector('h1').textContent).toContain(testEvent.name);
      
  });

  it('should show 404 if event is not found', () => {

    //arrange
    mockEventService.getEvent.and.returnValue(of(null));
    let errorMsg = '404: Event not found';

    //act
    fixture = TestBed.createComponent(EventPageComponent);
    let compiled = fixture.nativeElement;
    fixture.detectChanges();

    //assert
    expect(compiled.querySelector('h1').textContent).toContain(errorMsg);
      
  });
});
