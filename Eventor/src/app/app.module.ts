import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { EventDetailsComponent } from './components/events/event-details/event-details.component';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/shared/modal/modal.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { EventParticipantsComponent } from './components/events/event-participants/event-participants.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventCreatePageComponent } from './pages/event-create-page/event-create-page.component';
import { EventFormComponent } from './components/events/event-form/event-form.component';
import { DndModule } from 'ngx-drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailsComponent,
    ModalComponent,
    LoginComponentComponent,
    EventParticipantsComponent,
    EventFormComponent,

    EventPageComponent,
    OverviewPageComponent,
    EventCreatePageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//deze moet je niet vergeten!
    ReactiveFormsModule,
    DndModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
