// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^(\([-+]?[0-9]{3})\)(\s)*[0-9]{3}-{1}[0-9]{4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCard(txtCard) {
    var a = document.getElementById(txtCard).value;
    var filter = /^([0-9]{4}-){3}[0-9]{4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCvv(txtCvv) {
    var a = document.getElementById(txtCvv).value;
    var filter = /^[0-9]{3}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020","06/30/2021"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    // if (date.getDay() === 0)
    //     return [false];
    // var string = jQuery.datepicker.formatDate(setDateFormat, date);
    // return [ unavailableDates.indexOf(string) === -1 ]

    if (date.getDay() === 6 || date.getDay() === 0) {
      return [false];
    }

    if (whom == "Mike") {
      if (date.getDay() === 3) {
        return [false];
      } else {
        return [true];
      }
    } else if (whom == "Alice") {
      if (date.getDay() === 2) {
        return [false];
      } else {
        return [true];
      }
    } else if (whom == "Bob") {
      if (date.getDay() === 1 || date.getDay() === 5) {
        return [false];
      } else {
        return [true];
      }
    } else {
      return [true];
    }
 }


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone! \nYou should enter (xxx) xxx-xxxx");
            $("#phone").val("(xxx) xxx-xxxx");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    $("#card").on("change", function(){
        if (!validateCard("card")){
            alert("Wrong format for credit card number! \nYou should enter xxxx-xxxx-xxxx-xxxx");
            $("#card").val("xxxx-xxxx-xxxx-xxxx");
            $("#card").addClass("error");
        }
        else {
            $("#card").removeClass("error");
        }
    });

    $("#cvv").on("change", function(){
        if (!validateCvv("cvv")){
            alert("Wrong format for CVV! \nYou should enter 3 digits");
            $("#cvv").val("xxx");
            $("#cvv").addClass("error");
        }
        else {
            $("#cvv").removeClass("error");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            minDate: "+1D",
            maxDate: '+4M',
            // used to disable some dates
            // beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });


});
