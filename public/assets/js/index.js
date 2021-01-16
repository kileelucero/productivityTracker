$(document).ready(function () { 
  let otherResultsArray = [];
  let otherResultsNum = 0.0;
  let otherName = [];

  let appendOther = async () => {

    // append new other
    for (let i = 0; i < otherResultsArray.length; i++) {
        otherNameDisplay = otherName[i];
        otherAmtDisplay = otherResultsArray[i]

        let otherCard = `<a class="collection-item"><span class="new badge blue" data-badge-caption="">${ otherAmtDisplay.toFixed(1) } H</span>${ otherNameDisplay }</a>`
        $("#otherContainer").append(otherCard)
    }
};

  function otherData () {
    $.ajax({
      type: "GET",
      url: "/other-value/new",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: function (result){
      for (let i = 0; i < result.length; i++) {
        otherResultsArray.push(result[i].other_hours + ((result[i].other_mins / 6) * 10));
        otherResultsNum = parseInt(otherResultsNum) + parseInt(otherResultsArray[i]);
        otherName.push(result[i].other_name);
      } 
      appendOther()
    }});
    }
  otherData();

  let workingResultsArray = [];
  let workingResultsNum = 0.0;
  let workingName = [];

  let appendWorking = async () => {

    // append new working
    for (let i = 0; i < workingResultsArray.length; i++) {
        workingNameDisplay = workingName[i];
        workingAmtDisplay = workingResultsArray[i]

        let workingCard = `<a class="collection-item"><span class="new badge blue" data-badge-caption="">${ workingAmtDisplay.toFixed(1) } H</span>${ workingNameDisplay }</a>`
        $("#workContainer").append(workingCard)
    }
};

  function workingData () {
    $.ajax({
      type: "GET",
      url: "/work-inquiry/new",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: function (result){
      for (let i = 0; i < result.length; i++) {
        workingResultsArray.push(result[i].working_hours + ((result[i].working_mins / 6) * 10));
        workingResultsNum = parseInt(workingResultsNum) + parseInt(workingResultsArray[i]);
        workingName.push(result[i].working_name);
      } 
      appendWorking()
    }});
    }
  workingData();

  let exerciseResultsArray = [];
  let exerciseResultsNum = 0.0;
  let exerciseName = [];

  let appendExercise = async () => {

    // append new exercise
    for (let i = 0; i < exerciseResultsArray.length; i++) {
        exerciseNameDisplay = exerciseName[i];
        exerciseAmtDisplay = exerciseResultsArray[i]

        let exerciseCard = `<a class="collection-item"><span class="new badge blue" data-badge-caption="">${ exerciseAmtDisplay.toFixed(1) } H</span>${ exerciseNameDisplay }</a>`
        $("#efContainer").append(exerciseCard)
    }
};

  function exerciseData () {
    $.ajax({
      type: "GET",
      url: "/exercise/new",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: function (result){
      for (let i = 0; i < result.length; i++) {
        exerciseResultsArray.push(result[i].exercise_hours + ((result[i].exercise_mins / 6) * 10));
        exerciseResultsNum = parseInt(exerciseResultsNum) + parseInt(exerciseResultsArray[i]);
        exerciseName.push(result[i].exercise_name);
      } 
      appendExercise()
    }});
    }
  exerciseData();

  let sleepResultsArray = [];
  let sleepResultsNum = 0.0;
  let sleepName = [];

  let appendSleep = async () => {

    // append new sleep
    for (let i = 0; i < sleepResultsArray.length; i++) {
        sleepNameDisplay = sleepName[i];
        sleepAmtDisplay = sleepResultsArray[i]

        let sleepCard = `<a class="collection-item"><span class="new badge blue" data-badge-caption="">${ sleepAmtDisplay.toFixed(1) } H</span>${ sleepNameDisplay }</a>`
        $("#sleepContainer").append(sleepCard)
    }
};

  function sleepData () {
    $.ajax({
      type: "GET",
      url: "/sleep-inquiry/new",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: function (result){
      for (let i = 0; i < result.length; i++) {
        sleepResultsArray.push(result[i].sleep_hours + ((result[i].sleep_mins / 6) * 10));
        sleepResultsNum = parseInt(sleepResultsNum) + parseInt(sleepResultsArray[i]);
        sleepName.push(result[i].sleep_name);
      } 
      appendSleep()
    }});
    }
  sleepData();

  let famfriendResultsArray = [];
  let famfriendResultsNum = 0.0;
  let famfriendName = [];

  let appendFamfriend = async () => {

    // append new famfriend
    for (let i = 0; i < famfriendResultsArray.length; i++) {
        famfriendNameDisplay = famfriendName[i];
        famfriendAmtDisplay = famfriendResultsArray[i]

        let famfriendCard = `<a class="collection-item"><span class="new badge blue" data-badge-caption="">${ famfriendAmtDisplay.toFixed(1) } H</span>${ famfriendNameDisplay }</a>`
        $("#ffContainer").append(famfriendCard)
    }
};

  function famfriendData () {
    $.ajax({
      type: "GET",
      url: "/family&friends/new",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: function (result){
      for (let i = 0; i < result.length; i++) {
        famfriendResultsArray.push(result[i].famfriend_hours + ((result[i].famfriend_mins / 6) * 10));
        famfriendResultsNum = parseInt(famfriendResultsNum) + parseInt(famfriendResultsArray[i]);
        famfriendName.push(result[i].famfriend_name);
      } 
      appendFamfriend()
    }});
    }
  famfriendData();

  var chartDipsplay = document.getElementById("myChart");
  var myChart = new Chart(chartDipsplay, {
    type: 'doughnut',
    data: {
      labels: ["Work", "Exercise", "Sleep", "Family & Friends", "Other"],
      datasets: [{
        backgroundColor: [
          "#1ecbe1",
          "#7dc33c",
          "#E1341E",
          "#823CC3",
          "#95a5a6",
        ],
        data: [workingResultsArray, exerciseResultsArray, sleepResultsArray, famfriendResultsArray, otherResultsArray]
      }]
    }
  });
});