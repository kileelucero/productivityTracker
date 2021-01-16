$(document).ready(function () {

    $("#submitBtn").click((event) => {
        event.preventDefault();

        let exerciseName = $("#efVal").val();
        let exerciseHours = parseInt($('#hoursVal').val());
        let exerciseMins = parseInt($('#minsVal').val());
        
        let newExercise = {
            exercise_name: exerciseName,
            exercise_hours: exerciseHours,
            exercise_mins: exerciseMins
        };
        $.post("/exercise/new", newExercise);
        window.location.replace("/");        
    })
});