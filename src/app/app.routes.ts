import { Routes } from '@angular/router';
import { EventListScreenComponent } from './event-list-screen/event-list-screen.component';
import { EventCreationComponent } from './event-creation/event-creation.component';

export const routes: Routes = [
    { path: '', component: EventListScreenComponent, pathMatch: 'full' },
    { path: 'event/:id', component: EventCreationComponent },
    { path: 'create', component: EventCreationComponent }
];
