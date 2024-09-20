import { Component, Input } from '@angular/core';
import { EventData } from '../models/event-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-preview',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './event-preview.component.html',
})
export class EventPreviewComponent {
  @Input() previewData!: EventData;
}