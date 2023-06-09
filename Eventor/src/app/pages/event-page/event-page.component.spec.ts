import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventPageComponent } from './event-page.component';
import { AppModule } from 'src/app/app.module';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/sevices/event.service';
import { of } from 'rxjs';
import { EventDetailsComponent } from 'src/app/components/events/event-details/event-details.component';
import { Component, Input } from '@angular/core';
import { MockComponent } from 'ng-mocks';

let testEvent = {
  id: 1, 
  name: 'Test event',
  description: 'Test description',
  location: {
    city: 'Rosmalen city'
  }
};

let activeRouteMock = {
  snapshot: {
    paramMap: {
      get: function() {
        return 1;
      }
    }
  }
}

let eventServiceMock = jasmine.createSpyObj('eventService', ['getEvent']);
 
// let eventServiceMock = {
//   getEvent: () => of(testEvent)
// }

//ng-mocks

describe('EventPageComponent', () => {
  let component: EventPageComponent;
  let fixture: ComponentFixture<EventPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventPageComponent, MockComponent(EventDetailsComponent) ],
      providers: [  
        { provide: ActivatedRoute, useValue: activeRouteMock },
        { provide: EventService, useValue: eventServiceMock}
      ],
      //imports: [AppModule] //<<-- NIET DOEN!
    })
    .compileComponents();

    //Het echt maken van de component
    fixture = TestBed.createComponent(EventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the title in the jumbo from the event', () => {
    
    //arrange
    eventServiceMock.getEvent.and.returnValue(of(testEvent));

    //act
    fixture = TestBed.createComponent(EventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    //assert
    let jumboTitle = fixture.nativeElement.querySelector('h1');
    expect(jumboTitle.textContent).toContain(testEvent.name);

  })

  
  it('should not show the title but a 404 page not found', () => {

    //arrange
    let errorMsg = '404: Event not found';
    eventServiceMock.getEvent.and.returnValue(of(null));


    //act
    fixture = TestBed.createComponent(EventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //assert
    let jumboTitle = fixture.nativeElement.querySelector('h1');
    expect(jumboTitle.textContent).toContain(errorMsg);

  })


});
