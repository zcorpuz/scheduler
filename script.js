$(document).ready(function() {

    var currentDate = moment().format("MMMM Do YYYY, h:mm a");      
    $("#currentDay").append(currentDate);

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

    colorBlock();
    // Compare time slot to current time in order to change the color of the block
    function colorBlock() {
        var currentHour = moment().format('H');
        if ($(".eventRow").attr("value") === currentHour) {
            $(".eventRow").addClass("present");
        } else if ($(".eventRow").attr("value") > currentHour) {
            $(".eventRow").addClass("past");
        } else if ($(".eventRow").attr("value") < currentHour) {
            $(".eventRow").addClass("future");
        }
    }
    

    

    // Function to save text to local storage
    // function setEvent() {
    //     eventAdd = JSON.parse(eventAdd);
    //     localStorage.setItem(event, eventAdd);
    // }

});


