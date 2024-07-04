// Script to update current time in UTC and day of the week
function updateDateTime() {
    const date = new Date();
    
    // Get UTC time in HH:mm:ss format
    const hours = date.getUTCHours().toString().padStart(1, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const utcTime = `${hours}:${minutes}:${seconds}`;


     // Get day of the week
     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
     const dayOfWeek = daysOfWeek[date.getUTCDay()];
 
     const currentTimeUTCElement = document.querySelector('[data-testid="currentTimeUTC"]');
     const currentDayElement = document.querySelector('[data-testid="currentDay"]');
 
     if (currentTimeUTCElement) {
         currentTimeUTCElement.textContent = utcTime;
     }
 
     if (currentDayElement) {
         currentDayElement.textContent = dayOfWeek;
     }
 }
 
 // Update date-time immediately on page load
 updateDateTime();
 
 // Update date-time every second to keep it current
 setInterval(updateDateTime, 1000);