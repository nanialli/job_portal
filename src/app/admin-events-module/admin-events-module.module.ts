import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEventsModuleRoutingModule } from './admin-events-module-routing.module';
import { EventsTableComponent } from './events-table/events-table.component';
import { EventAddFormComponent } from './event-add-form/event-add-form.component';


@NgModule({
  declarations: [
    EventsTableComponent,
    EventAddFormComponent
  ],
  imports: [
    CommonModule,
    AdminEventsModuleRoutingModule
  ]
})
export class AdminEventsModuleModule { }
