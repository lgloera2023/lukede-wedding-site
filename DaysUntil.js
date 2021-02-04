/*************************************************************************
 * Created By: Luke Loera
 * Date: 12/29/2020
 * 
 * Description:
 * This script houses a function to return the days until a given date.
 * 
 *************************************************************************/



////////////////////////////////////////////////////////////////////////////////////
//  Pre-condition: someDate must be a date constructed from JS built-in Date object
//  Post-condition: Returns the number of days until the given date (rounded up)
function daysUntil(someDate) {
    // Get the time until date in milliseconds
    var timeUntil = someDate - Date.now();

    // Return the days until the date or 0 if reached or passed
    if (timeUntil < 0) {
        return 0;
    } else {
        timeUntil /= 1000;  // Seconds
        timeUntil /= 60;  // Minutes
        timeUntil /= 60;  // Hours
        timeUntil /= 24;  // Days

        return timeUntil;
    }
}