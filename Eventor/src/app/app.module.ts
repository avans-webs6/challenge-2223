import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { EventCreateComponent } from './components/events/event-create/event-create.component';
import { EventDetailsComponent } from './components/events/event-details/event-details.component';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventCreateComponent,
    EventDetailsComponent,
    EventPageComponent,
    OverviewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule //deze moet je niet vergeten!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
