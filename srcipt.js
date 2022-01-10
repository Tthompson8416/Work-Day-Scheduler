$(".saveBtn").click(function() {
    event.preventDefault();

    let hrTask = $(this).attr("hour")      // Corresponds to the key referenced for localStorage - also same as hour in military time.
    let storeTask = $(this).prev().val();  // Previous sibling https://api.jquery.com/prev/ (in this case previous sibling is the textarea, value is the text entered.)

    localStorage.setItem(hrTask, JSON.stringify(storeTask));
});

// Recall tasks from localStorage back into scheduler when renavigating to the page or when page is refreashed.

$("#9").val(localStorage.getItem("9"))
$("#10").val(localStorage.getItem("10"))
$("#11").val(localStorage.getItem("11"))
$("#12").val(localStorage.getItem("12"))
$("#13").val(localStorage.getItem("13"))
$("#14").val(localStorage.getItem("14"))
$("#15").val(localStorage.getItem("15"))
$("#16").val(localStorage.getItem("16"))
$("#17").val(localStorage.getItem("17"))