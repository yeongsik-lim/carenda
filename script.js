document.addEventListener('DOMContentLoaded', () => {
    const calendarDays = document.getElementById('calendar-days');
    
    // December 2025
    const year = 2025;
    const month = 11; // 0-indexed, so 11 is December
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0); // Day 0 of next month is last day of current
    
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay(); // 0 (Sun) - 6 (Sat)
    
    // Clear previous content
    calendarDays.innerHTML = '';
    
    // Add empty slots for days before the 1st
    for (let i = 0; i < startDayOfWeek; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day', 'empty');
        calendarDays.appendChild(emptyDay);
    }
    
    // Add days
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        
        const dayNumber = document.createElement('span');
        dayNumber.classList.add('day-number');
        dayNumber.textContent = day;
        dayElement.appendChild(dayNumber);
        
        // Check for special events
        if (day === 19) {
            dayElement.classList.add('special-date');
            
            const eventLabel = document.createElement('div');
            eventLabel.classList.add('event-label');
            eventLabel.textContent = '서태산 생일';
            dayElement.appendChild(eventLabel);
        }
        
        // Add delay for animation
        dayElement.style.animationDelay = `${day * 0.03}s`;
        dayElement.classList.add('fade-in'); // You might want to add a keyframe for this if not already in CSS, or rely on the hover transition
        
        calendarDays.appendChild(dayElement);
    }
});
