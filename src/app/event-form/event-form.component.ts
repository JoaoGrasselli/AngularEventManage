import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { EventData } from '../models/event-data.model';
import { EventService } from '../service/eventService';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './event-form.component.html',
})
export class EventFormComponent implements OnInit {
  @Input() eventData!: EventData;
  @Output() onFormChange = new EventEmitter<EventData>();

  eventForm: FormGroup;

  constructor(private fb: FormBuilder, private eventService: EventService) {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      date: ['', Validators.required],
      category: ['', Validators.required]
    });
    this.eventService = eventService;
  }

  ngOnInit(): void {
    if (this.eventData) {
      this.eventForm.patchValue(this.eventData);
    }

    this.eventForm.valueChanges.subscribe((value) => {
      this.onFormChange.emit({ ...this.eventData, ...value });
    });

    //Lidando com o envio do formulário
    
  }

  formSubmit(): void {
    if(this.eventForm.valid) {
      const event: EventData = this.formToValue(this.eventForm);
      this.eventService.addEvent(event);
      
      this.eventForm.reset();
    } else {
      alert('Formulário inválido');
    }
  }

  formToValue(form: typeof this.eventForm):EventData {
    return {
      id: this.eventData.id ? this.eventData.id : uuidv4(),
      name: form.value.name,
      description: form.value.description,
      date: form.value.date,
      category: form.value.category
    };
  }
}