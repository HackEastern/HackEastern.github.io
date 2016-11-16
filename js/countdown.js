//100% vegetarian code
function startCountdown() {
    //Dates are declared in the format year, month, day, hours, minutes, seconds, milliseconds
    var hackathonDate = new Date("December 3, 2016 00:00:00");
    var h = hackathonDate.getHours();
    var m = hackathonDate.getMinutes();
    var s = hackathonDate.getSeconds();
    m = padTime(m);
    s = padTime(s);
    document.getElementById('txt').innerHTML = hackathonDate;
    h + ":" + m + ":" + s;
    var t = setTimeout(startCountdown, 500);
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
