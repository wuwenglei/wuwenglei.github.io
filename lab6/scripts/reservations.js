var submitBtn;
var what;
var whom;
var where = "Southern Ottawa";
var when;
var time = "9:00";

function start() {
  submitBtn = document.getElementById("submitButton");
  submitBtn.addEventListener("click", feedbackSubmit, false);
}

function feedbackSubmit() {
  when = document.getElementById("dateInput").value;
  if (! what) {
    window.alert("Please choose a service you want!");
  } else if (! whom) {
    window.alert("Please choose an expert!");
  } else if (! when || ! time) {
    window.alert("Please enter the date and time of your appointment!");
  } else {
    window.alert("Your booking was submitted successfully! "+whom+" will provide you with the service "+what+" at our "+where+" clinic on "+when+" at "+time+", please arrive at our "+where+" clinic on time!");
  }
}

function updateWhat() {
  var serviceRadio = document.getElementsByName("selectService");
  for (var i = 0; i < serviceRadio.length; i++) {
    if (serviceRadio[i].checked) {
      what = serviceRadio[i].value;
      return;
    }
  }
}

function updateWhom() {
  var expertRadio = document.getElementsByName("selectExpert");
  for (var i = 0; i < expertRadio.length; i++) {
    if (expertRadio[i].checked) {
      whom = expertRadio[i].value;
      return;
    }
  }
}

function updateWhere() {
  var clinicSelect = $("#selectClinic option:selected");
  where = clinicSelect.val();
}

function updateTime() {
  var timeSelect = $("#timeInput option:selected");
  time = timeSelect.val();
}


window.addEventListener("load", start, false);
