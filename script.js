$(document).ready(function (){

    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    function workDay() {
     
        var currentTime = moment().hours();
       
        $(".time-block").each(function () {
            var blockOut = parseInt($(this).attr("id"));

            if (currentTime === blockOut) {
             
                $(this).addClass("present");
            }
            else if (currentTime > blockOut) {
             
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
workDay();
   


    var saveBtn = $(".saveBtn");
    saveBtn.on("click", function () {
       
        var time = $(this).parent().attr("id");
     
        var value = $(this).siblings(".scheduler").val()
        localStorage.setItem(time, value)
    })



    $("#9 .scheduler").val(localStorage.getItem("9"))
    $("#10 .scheduler").val(localStorage.getItem("10"))
    $("#11 .scheduler").val(localStorage.getItem("11"))
    $("#12 .scheduler").val(localStorage.getItem("12"))
    $("#13 .scheduler").val(localStorage.getItem("13"))
    $("#14 .scheduler").val(localStorage.getItem("14"))
    $("#15 .scheduler").val(localStorage.getItem("15"))
    $("#16 .scheduler").val(localStorage.getItem("16"))
    $("#17 .scheduler").val(localStorage.getItem("17"))

});


// ## Your Task

// Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

// You'll need to use a library like [Moment.js](https://momentjs.com/) to work with dates and times. `Moment.js` has historically been the most popular date/time library but is no longer supported by its developers. However, you can still use it for this project, or you can look into one of the following alternatives:

//   * [Luxon](https://moment.github.io/luxon/)

//   * [Day.js](https://day.js.org/)

//   * [date-fns](https://date-fns.org/)

//   * [js-Joda](https://js-joda.github.io/js-joda/)

// Whichever library you choose, be sure to read the documentation carefully!