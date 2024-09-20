import { Injectable } from '@angular/core';
import { EventData } from '../models/event-data.model';

const EVENT_STORAGE_KEY = 'events';

@Injectable({ providedIn: 'root' })
export class EventService {
    events: EventData[];

    constructor() {
        const events = localStorage.getItem(EVENT_STORAGE_KEY);
        if (events) {
            this.events = JSON.parse(events);
        } else {
            this.events = [
                { id: 'e2fab863-3a5e-41a8-8b82-e46da7add13b', name: 'Evento 1', description: 'Descrição 1', date: new Date('2024-05-20'), category: 'Esporte' },
                { id: '3aa46ea2-1318-43b8-82bd-18c9c84d9fbd', name: 'Evento 2', description: 'Descrição 2', date: new Date('2024-06-15'), category: 'Teatro' },
            ];
            localStorage.setItem(EVENT_STORAGE_KEY, JSON.stringify(this.events));
        }
        
    }
    addEvent(event: EventData): void {
        this.events.push(event);
        this.saveEvents();
    }
    getEvents(): EventData[] {
        return this.events;
    }
    getEvent(id: string): EventData | null {
        const event: EventData | undefined = this.events.find(event => event.id === id);
        return event ? event : null;
    }
    updateEvent(event: EventData): void {
        const index = this.events.findIndex(e => e.id === event.id);
        this.events[index] = event;

        this.saveEvents();
    }
    deleteEvent(id: string): void {
        this.events = this.events.filter(event => event.id !== id);
        this.saveEvents();
    }

    private saveEvents(): void {
        localStorage.setItem(EVENT_STORAGE_KEY, JSON.stringify(this.events));
    }
}