async function agendar(agendamento) {
  const url = `http://localhost:5000/servico/agendar`;
  console.log(agendamento)
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(agendamento),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}


document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var Draggable = FullCalendar.Draggable;
  var containerEl = document.getElementById('external-events');
  var checkbox = document.getElementById('drop-remove');

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
    drop: async function (info) {
      const servico = info.draggedEl.innerText
      const data = info.dateStr
      const agendamento = {
        servico, data
      }
      await agendar(agendamento)
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
  // console.log(calendar.currentData.getCurrentData())

  calendar.on('dateClick', function (info) {
    // console.log('clicked on ' + info.dateStr);
  });

});
