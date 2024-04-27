import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsModuleRoutingModule } from './events-module-routing.module';
import { ShowEventsComponent } from './show-events/show-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShowEventsComponent,
    AddEventComponent
  ],
  imports: [
    CommonModule,
    EventsModuleRoutingModule,
    FormsModule
  ]
})
export class EventsModuleModule { }
