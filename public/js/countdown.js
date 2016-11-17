
function startCountdown() {
    var hackathonDate = new Date("December 3, 2016 00:00:00");
    var today = new Date();
    var daysLeft    = getDaysTill(hackathonDate);
    var hoursLeft   = 24 - (today.getHours()   - hackathonDate.getHours());
    var minutesLeft = 60 - (today.getMinutes() - hackathonDate.getMinutes());
    var secondsLeft = 60 - (today.getSeconds() - hackathonDate.getSeconds());

    document.getElementById('countdown').innerHTML =
        "<span class=\"accent-text\">"+daysLeft+"</span>" + " days "
        +
        "<br />"
        +
        //TODO account for a singular HOUR left.
        "<span class=\"accent-text\">"+hoursLeft+"</span>" + " hours "
        +
        "<br />"
        +
        "<span class=\"accent-text\">"+minutesLeft+"</span>" + " minutes and "
        +
        "<br />"
        +
        "<span class=\"accent-text\">"+secondsLeft+"</span>" + " seconds left";

    var t = setTimeout(startCountdown, 500);
}

/**
* Grab the days until the given date object and return. *Only works for up to a year away*
* @param {hackathonDate} hackathon date
* @return {daysTill} number of days until the hackathon date
*/
function getDaysTill(hackathonDate) {
    var currDate = new Date();
    var currMonth = currDate.getMonth()+1;
    var hackathonMonth = hackathonDate.getMonth()+1;

    //initialize days till with the days until the end of this month
    var daysTill = new Date(currDate.getFullYear(), currMonth, 0).getDate() - currDate.getDate();

    //increment month because we just added those days
    currMonth++;

    //While less than hackathon month, grab days in the month, add to total, increment currMonth
    while(currMonth < hackathonMonth) {
      daysInMonth = new Date(currDate.getFullYear(), currMonth, 0).getDate();
      daysTill += daysInMonth;
      currMonth++;
    }

    //Add the date inside the hackathon month to running total
    daysTill += hackathonDate.getDate();
    return daysTill;
}

//Trigger the countdown timer
startCountdown();
