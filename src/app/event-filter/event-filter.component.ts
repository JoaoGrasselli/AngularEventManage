import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './event-filter.component.html',
})
export class EventFilterComponent {
  @Output() onFilterChange = new EventEmitter<{ startDate: Date, endDate: Date, category: string }>();

  startDate!: Date;
  endDate!: Date;
  category: string = '';

  applyFilter(): void {
    this.onFilterChange.next({
      startDate: this.startDate,
      endDate: this.endDate,
      category: this.category
    });
  }
}