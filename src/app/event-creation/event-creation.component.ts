import { Component } from '@angular/core';
import { EventData } from '../models/event-data.model';

import { EventPreviewComponent } from '../event-preview/event-preview.component';
import { EventFormComponent } from '../event-form/event-form.component';

@Component({
  selector: 'app-event-creation',
  standalone: true,
  imports: [EventPreviewComponent, EventFormComponent],
  templateUrl: './event-creation.component.html',
})
export class EventCreationComponent {
  selectedEvent: EventData = {
    id: '',
    name: '',
    description: '',
    date: new Date(),
    category: ''
  };

  currentFormData: EventData = { ...this.selectedEvent };

  handleFormChange(updatedData: EventData): void {
    this.currentFormData = updatedData;
  }
}