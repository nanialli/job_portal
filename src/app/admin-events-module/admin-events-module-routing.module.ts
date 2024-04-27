import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsTableComponent } from './events-table/events-table.component';
import { EventAddFormComponent } from './event-add-form/event-add-form.component';

const routes: Routes = [
  {path:"",component:EventsTableComponent},
  {path:"addEvent",component:EventAddFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEventsModuleRoutingModule { }
