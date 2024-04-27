import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowEventsComponent } from './show-events/show-events.component';
import { AddEventComponent } from './add-event/add-event.component';

const routes: Routes = [
  {path:"",component:ShowEventsComponent},
  {path:"add-event", component:AddEventComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsModuleRoutingModule { }
