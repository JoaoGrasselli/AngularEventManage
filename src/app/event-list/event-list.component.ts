import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventData } from '../models/event-data.model';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-list.component.html',
})
export class EventListComponent {
  @Input() events: EventData[] = [];
  @Output() onEventSelect = new EventEmitter<EventData>();

  selectEvent(event: EventData): void {
    this.onEventSelect.next(event);
  }
}