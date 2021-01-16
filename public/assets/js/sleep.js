$(document).ready(function () {

    $("#submitBtn").click((event) => {
        event.preventDefault();

        let sleepName = $("#1").val();
        let sleepHours = parseInt($('#hoursVal').val());
        let sleepMins = parseInt($('#minsVal').val());

        let newSleep = {
            sleep_name: sleepName,
            sleep_hours: sleepHours,
            sleep_mins: sleepMins
        };
        $.post("/sleep-inquiry/new", newSleep);
        window.location.replace("/");  
    })
});