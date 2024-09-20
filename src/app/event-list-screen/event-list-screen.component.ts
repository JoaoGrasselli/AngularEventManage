import { Component, OnInit } from '@angular/core';
import { EventData } from '../models/event-data.model';
import { EventService } from '../service/eventService';
import { EventListComponent } from '../event-list/event-list.component';
import { EventFilterComponent } from '../event-filter/event-filter.component';

@Component({
  selector: 'app-event-list-screen',
  standalone: true,
  imports: [EventListComponent, EventFilterComponent],
  templateUrl: './event-list-screen.component.html',
})
export class EventListScreenComponent implements OnInit {
  allEvents: EventData[] = [];
  filteredEvents: EventData[] = [];

  constructor(private eventService: EventService) {  }

  ngOnInit(): void {
    // Inicialização com eventos fictícios
    this.allEvents = this.eventService.getEvents();
    this.filteredEvents = [...this.allEvents];
  }

  applyFilter(criteria: { startDate: Date, endDate: Date, category: string }): void {
    this.filteredEvents = this.allEvents.filter(event => {
      const matchesStartDate = criteria.startDate ? event.date >= new Date(criteria.startDate) : true;
      const matchesEndDate = criteria.endDate ? event.date <= new Date(criteria.endDate) : true;
      const matchesCategory = criteria.category ? event.category.toLowerCase().includes(criteria.category.toLowerCase()) : true;
      return matchesStartDate && matchesEndDate && matchesCategory;
    });
  }

  handleEventSelect(event: EventData): void {
    // Lógica para lidar com a seleção de um evento (por exemplo, abrir detalhes ou editar)
    console.log('Evento selecionado:', event);
  }
}