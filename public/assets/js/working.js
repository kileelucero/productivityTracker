$(document).ready(function () {

    $("#submitBtn").click((event) => {
        event.preventDefault();

        let workingName = $("#1").val();
        let workingHours = parseInt($('#hoursVal').val());
        let workingMins = parseInt($('#minsVal').val());

        let newWork = {
            working_name: workingName,
            working_hours: workingHours,
            working_mins: workingMins
        };
        $.post("/work-inquiry/new", newWork);
        window.location.replace("/");
    })
});