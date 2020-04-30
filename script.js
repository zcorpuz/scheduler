$(document).ready(function() {

    // This sets the current date at the top of the page
    var currentDate = moment().format("MMMM Do YYYY, h:mm a");      
    $("#currentDay").append(currentDate);

    // Compare time slot to current time in order to change the color of the block
    function colorBlock() {

        // Set current hour in military time to negate the use of AM/PM
        var currentHour = moment().format('H');

        // Following Function will seperate values of each block
        $(".eventRow").each(function() {
            var eventBlock = parseInt($(this).attr("value"));

            // Compare each timeblock to current hour
            if (eventBlock < currentHour) {
                $(this).addClass("past");
            }else if (eventBlock === currentHour) {
                $(this).addClass("present");
            }else if (eventBlock > currentHour) {
                $(this).addClass("future");
            }
        })
    }

    // function setEvents() {
    //     $(this).empty();
    //     $(this).append(localStorage.getItem("Event")); 
    // }


    // localStorage.setItem("9am Event", ($("#eventRow1").html()));
    // var savedEvents = localStorage.getItem("9am Event");
    // $("eventRow1").html(savedEvents);
    // console.log(saveEvents);
    // $(".eventRow").append(localStorage.getItem("9am Event"));
    // localStorage.setItem("Event", $(".eventRow").html());
    // eventAdd.replace(localStorage.getItem("Event"));

    colorBlock();

    // Below are the click events for each row so that the user can input what events they want for each hour
    $("#eventRow1").on("click", function() {
        var eventAdd = prompt("What event would you like to add?");
        $("#eventRow1").text(eventAdd);
    });
    

    $("#eventRow2").on("click", function() {
        var eventAdd = prompt("What event would you like to add?");
        $("#eventRow2").text(eventAdd);
    });

    $("#eventRow3").on("click", function() {
        var eventAdd = prompt("What event would you like to add?");
        $("#eventRow3").text(eventAdd);
    });

    $("#eventRow4").on("click", function() {
        var eventAdd = prompt("What event would you like to add?");
        $("#eventRow4").text(eventAdd);
    });

    $("#eventRow5").on("click", function() {
        var eventAdd = prompt("What event would you like to add?");
        $("#eventRow5").text(eventAdd);
    });

    $("#eventRow6").on("click", function() {
        var eventAdd = prompt("What event would you like to add?");
        $("#eventRow6").text(eventAdd);
    });

    $("#eventRow7").on("click", function() {
        var eventAdd = prompt("What event would you like to add?");
        $("#eventRow7").text(eventAdd);
    });

    $("#eventRow8").on("click", function() {
        var eventAdd = prompt("What event would you like to add?");
        $("#eventRow8").text(eventAdd);
    });

    $("#eventRow9").on("click", function() {
        var eventAdd = prompt("What event would you like to add?");
        $("#eventRow9").text(eventAdd);
    });
});