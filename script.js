var currentHour = 1;
var currentHour = moment().hours()


$(document).ready(function() {
});

$("#currentDay").append(today) 


// Time block background colors for past(gray), present(red) and future(green)

let taskInput = $(".row textarea[type=text]"); 
$(taskInput).each(function() {       


const taskInputNumber = parseInt($(this).attr("id")); 

 if (taskInputNumber < currentHour) {
     $(this).addClass("past")
 }

    else if (taskInputNumber == currentHour) {
        $(this).addClass("present")
    }

    else if (taskInputNumber > currentHour) {
        $(this).addClass("future")
    }
});

//Save task data input by user when save button is clicked.

$(".saveBtn").click(function() {
    event.preventDefault();

    let hrTask = $(this).attr("hour")    
    let storeTask = $(this).prev().val(); 

    localStorage.setItem(hrTask, JSON.stringify(storeTask));
});

// Recall tasks from localStorage after refreshing page

$("#9").val(localStorage.getItem("9"))
$("#10").val(localStorage.getItem("10"))
$("#11").val(localStorage.getItem("11"))
$("#12").val(localStorage.getItem("12"))
$("#13").val(localStorage.getItem("13"))
$("#14").val(localStorage.getItem("14"))
$("#15").val(localStorage.getItem("15"))
$("#16").val(localStorage.getItem("16"))
$("#17").val(localStorage.getItem("17")) 