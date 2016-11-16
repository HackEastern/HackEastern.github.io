
function startCountdown() {
    var hackathonDate = new Date("December 3, 2016 00:00:00");
    var today = new Date();
    console.log(getDaysTill(hackathonDate));
    var daysLeft    = getDaysTill(hackathonDate);
    var hoursLeft   = today.getHours()   - hackathonDate.getHours();
    var minutesLeft = today.getMinutes() - hackathonDate.getMinutes();
    var secondsLeft = today.getSeconds() - hackathonDate.getSeconds();

    m = padTime(minutesLeft);
    s = padTime(secondsLeft);
    document.getElementById('countdown').innerHTML =
        "in... <br /> <br /> " +
        "<strong>"+daysLeft+"</strong>" + " days "
        +
        "<br />"
        +
        "<strong>"+hoursLeft+"</strong>" + " hours "
        +
        "<br />"
        +
        "<strong>"+minutesLeft+"</strong>" + " minutes "
        +
        "<br />"
        +
        "<strong>"+secondsLeft+"</strong>" + " seconds ";

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

function padTime(i) {
    // add zero in front of numbers < 10
    if (i < 10) {
      i = "0" + i
    };
    return i;
}

//Trigger the countdown timer
startCountdown();
