import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventFilterComponent } from './event-filter/event-filter.component';
import { EventListScreenComponent } from './event-list-screen/event-list-screen.component';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { EventPreviewComponent } from './event-preview/event-preview.component';
import { EventFormComponent } from './event-form/event-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventFilterComponent,
    EventListScreenComponent,
    EventCreationComponent,
    EventPreviewComponent,
    EventFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }