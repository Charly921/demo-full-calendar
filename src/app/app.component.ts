import { Component, ViewChild, Input } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import * as $ from 'jquery';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  @Input() eventData: any;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'es',
    buttonText: {
      today: 'Hoy'
    },
    editable: true,
    titleFormat: 'MMM D YYYY',
    /* views: {
      agenda: {
        eventLimit: 2
      }
    }, */
    /* allDaySlot: false, */
    /* slotDuration: moment.duration('00:15:00'), */
    /* slotLabelInterval: moment.duration('01:00:00'), */
    firstDay: 1,
    selectable: true,
    /* selectHelper: true, */
    events: this.eventData,
    dayClick: (date, jsEvent, activeView) => {
      this.dayClick(date, jsEvent, activeView);
    },
    eventDragStart: (timeSheetEntry, jsEvent, ui, activeView) => {
      this.eventDragStart(
        timeSheetEntry, jsEvent, ui, activeView\
      );
    },
    eventDragStop: (timeSheetEntry, jsEvent, ui, activeView) => {
      this.eventDragStop(
        timeSheetEntry, jsEvent, ui, activeView
      );
    },
  };

  constructor() {
    this.eventData = [
      {
        title: 'event1',
        start: moment()
      },
      {
        title: 'event2',
        start: moment(),
        end: moment().add(2, 'days')
      },
    ];
  }

  dayClick(date, jsEvent, activeView) {
    console.log('day click');
 }
 eventDragStart(timeSheetEntry, jsEvent, ui, activeView) {
    console.log('event drag start');
 }
 eventDragStop(timeSheetEntry, jsEvent, ui, activeView) {
    console.log('event drag end');
 }

  /* defaultConfigurations: any;
  constructor() {
    this.defaultConfigurations = {
      editable: true,
      eventLimit: true,
      titleFormat: 'MMM D YYYY',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Day'
      },
      views: {
        agenda: {
          eventLimit: 2
        }
      },
      allDaySlot: false,
      slotDuration: moment.duration('00:15:00'),
      slotLabelInterval: moment.duration('01:00:00'),
      firstDay: 1,
      selectable: true,
      selectHelper: true,
      events: this.eventData,
    };

  } */



  someM() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.next();
  }
}
