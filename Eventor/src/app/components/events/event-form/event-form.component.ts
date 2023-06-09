import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent {

  @Input()
  public debounceTime: number = 500;

  @Input()
  public event: any = {
    location: {}
  };

  @Output()
  public onChange: EventEmitter<any> = new EventEmitter();

  public eventForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.eventForm = this.fb.group({
      name: [this.event.name],
      bannerUri: [this.event.bannerUri],
      date: [this],
      time: [this],
      location: this.fb.group({
        adress: [this.event.location.adress],
        country: [this.event.location.country],
        city: [this.event.location.city],
      }),
    });
    
    //this.fb.group(this.event);

    this.eventForm
      .valueChanges
      .pipe(debounceTime(this.debounceTime))
      .subscribe((value) => {
        this.onChange.emit(value);
      })
  }


  
}
