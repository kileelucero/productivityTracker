$(document).ready(function () {

    $("#submitBtn").click((event) => {
        event.preventDefault();

        let otherName = $("#inputVal").val();
        let otherHours = parseInt($('#hoursVal').val());
        let otherMins = parseInt($('#minsVal').val());

        let newOther = {
            other_name: otherName,
            other_hours: otherHours,
            other_mins: otherMins
        };
        $.post("/other-value/new", newOther);
        window.location.replace("/");
    })
});