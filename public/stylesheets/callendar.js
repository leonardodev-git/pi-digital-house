document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var Draggable = FullCalendar.Draggable;
  var containerEl = document.getElementById('external-events');
  var checkbox = document.getElementById('drop-remove');

  // initialize the external events
  // -----------------------------------------------------------------

  new Draggable(containerEl, {
    itemSelector: '.fc-event',
    eventData: function (eventEl) {
      return {
        title: eventEl.innerText
      };
    }
  });
  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'pt-br',
    initialView: 'dayGridMonth',
    initialDate: '2021-03-07',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true,
    droppable: true,
    drop: function (info) {
      // is the "remove after drop" checkbox checked?
      if (checkbox.checked) {
        // if so, remove the element from the "Draggable Events" list
        info.draggedEl.parentNode.removeChild(info.draggedEl);
      }
    },

    events: [
      {
        title: 'All Day Event',
        start: '2021-03-01'
      },
      {
        title: 'Long Event',
        start: '2021-03-07',
        end: '2021-03-10'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2021-03-09T16:00:00'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2021-03-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2021-03-11',
        end: '2021-03-13'
      },
      {
        title: 'Meeting',
        start: '2021-03-12T10:30:00',
        end: '2021-03-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2021-03-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2021-03-12T14:30:00'
      },
      {
        title: 'Birthday Party',
        start: '2021-03-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2021-03-28'
      }
    ]
  });
  calendar.render();


});
