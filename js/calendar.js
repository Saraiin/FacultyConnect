// calendar.js
document.addEventListener('DOMContentLoaded', function () {
  const calendarContainer = document.getElementById('calendar-container');
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Sample events and exams data
  const events = [
    { date: '2023-12-24', title: 'Final - exam1' },
    { date: '2023-12-25', title: 'Final- exam2' },
    { date: '2023-12-26', title: 'Final - exam3' },
    { date: '2023-12-27', title: 'Final- exam4' },
  ];

  // Function to generate and populate the calendar
  function generateCalendar() {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);

    const daysInMonth = lastDay.getDate();

    calendarContainer.innerHTML = `
      <h2>${months[currentMonth]} ${currentYear}</h2>
      <div class="calendar "></div>
    `;

    const calendarGrid = calendarContainer.querySelector('.calendar');

    // Create day headers
    for (let i = 0; i < 7; i++) {
      calendarGrid.innerHTML += `<div class="day">${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i]}</div>`;
    }

    // Create empty cells for days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      calendarGrid.innerHTML += `<div class="day"></div>`;
    }

    // Create cells for each day in the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const isEventDay = events.some(event => event.date === date.toISOString().split('T')[0]);

      const dayElement = document.createElement('div');
      dayElement.classList.add('day');
      dayElement.innerHTML = `${day}${isEventDay ? '<br><span class="event">Final</span>' : ''}`;
      calendarGrid.appendChild(dayElement);
    }
  }

  // Generate and populate the calendar on page load
  generateCalendar();
});
