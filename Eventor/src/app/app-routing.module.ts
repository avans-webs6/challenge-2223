import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { EventCreatePageComponent } from './pages/event-create-page/event-create-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewPageComponent },
  { path: 'create-event', component: EventCreatePageComponent },
  { path: 'event/:id', component: EventPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
