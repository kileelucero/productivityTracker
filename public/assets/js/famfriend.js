$(document).ready(function () {

    $("#submitBtn").click((event) => {
        event.preventDefault();

        let famfriendName = $("#inputVal").val();
        let famfriendHours = parseInt($('#hoursVal').val());
        let famfriendMins = parseInt($('#minsVal').val());

        let newFamfriend = {
            famfriend_name: famfriendName,
            famfriend_hours: famfriendHours,
            famfriend_mins: famfriendMins
        };
        $.post("/family&friends/new", newFamfriend);
        window.location.replace("/");
    })
});