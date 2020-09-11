console.log("hello world");



// =====================Define global variables=========================
// =====================================================================
var timesArray = [
    moment('9:00 AM', 'h A'), 
    moment('10:00 AM', 'h A'), 
    moment('11:00 AM', 'h A'), 
    moment('12:00 PM', 'h A'), 
    moment('1:00 PM', 'h A'), 
    moment('2:00 PM', 'h A'), 
    moment('3:00 PM', 'h A'),
    moment('4:00 PM', 'h A'),
    moment('5:00 PM', 'h A'),
    
]

// Used to create id tags that match current time to use for local storage
var timeAssignment = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Current Day Display at the top of Screen
var currentDayEl = $("#currentDay");
var calendarContainerEl = $(".calendarContainer");
var currentTimeEl = $("#currentTimeEl");
var m = moment();
var now = moment();
var nowHours = now.format('h z')




// ========================Set currentDayEl using momentjs=============
// ====================================================================
var currentDate = m.format('dddd, MMMM Do');
currentDayEl.text(currentDate);

// ======================Set a current time variable to reference for time-block
// ===========================================================================
var currentTime = m.format('LTS'); 

setInterval(function(){
var now = moment();
var readableTime = now.format('hh:mm:ss A');
currentTimeEl.text(readableTime);
},1000);


//  =================== set item to local storage ==================================
// =================================================================================
$(document).on("click", ".saveBtn",function() {
    console.log("hello");
                        // =====key===============      ================value==================
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings(".description").val().trim());
});


// ====================== write a function for checking local storage. Abstract it to include it into the loop that renders the page========
// =====================================================================================================================
function getStorage(){
// Object.keys(objectName) returns an array of keys
var storageKeys = Object.keys(localStorage)

for (var i = 0; i < storageKeys.length; i++){
    var savedText = localStorage.getItem(storageKeys[i]);
    $("#" + storageKeys[i].toString()).children(".description").val(savedText);
};
}




// =============== Dynamically render time blocks =====================
// ====================================================================
// for an amount of times equal to timesArray.length -1
for (var i =0; i < timesArray.length; i++){
// 1)create a row el and assign it to the variable of calRow
    var calRow = $("<row>");
    // 1.1) set attribute on that row to give it a class=" row time-block
    calRow.attr("class", "row  time-block");
    // Assign time assignment
    calRow.attr("id", timeAssignment[i]);
// 2)create a div el and assign it to a variable of hourLabel
    var hourLabel = $("<div>");
    // 2.1) set attribute on that div to give it a class = "col-sm-1 hour"
    hourLabel.attr("class", "col-sm-1 hour");
    // 2.2) set the text value of that div to equal to timesArray[i]._1 (Because turning them into moments, turns them into objects)
    hourLabel.text(timesArray[i]._i);
// 3) create a text area element and assign it to a variable of textArea
    var textArea = $("<textarea>");
    // 3.1) set attribute on that text area to give it a class = "col-sm-10 description"
    textArea.attr("class", "col-sm-10 description");
    // 3.2) ==optional=== set an attribute to give that text area a placeholder text of "enter calendar item here"
    textArea.attr("placeholder", "What's on the schedule?");
    // 3.3) TODO:set a data attribute equal to the current iteration????
// 4) create a button element and assign it to a variable of saveButton
    var saveButton = $("<button>");
    // 4.1)set attributes on the button to give it a class="col-sm-1 saveBtn" TODO:Possibly add additional class for Font Awesome Icon
    saveButton.attr("class", "col-sm-1 saveBtn");
    // 4.2)===Temporary until Font Awesome class is added=== set the text value of the button to be "Save"
    saveButton.text("Book it!");
// 5) Append the hourLabel to the row
    calRow.append(hourLabel);
// 6) Append the textArea to the row
    calRow.append(textArea);
// 7) Append the saveButton to the row
    calRow.append(saveButton);
// 8) Append the row to the calendarContainerEl(defined in global)
    calendarContainerEl.append(calRow);
    
    if(timeAssignment[i] < moment().format('H')){
        calRow.addClass("past");
    }else if(timeAssignment[i]> moment().format('H')){
        calRow.addClass("future");
    }else{
        calRow.addClass("present");
    }
    getStorage();
}
// ============================ Loop End ===============================
// ====================================================================
    


