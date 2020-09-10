console.log("hello world");

// Define essential variables
// =======================
var timesArray = [
    "9 AM", 
    "10 AM",
    "11 AM", 
    "12 AM", 
    "1 PM", 
    "2 PM",
    "3 PM", 
    "4 PM",
    "5 PM"
]
// Current Day Display at the top of Screen
var currentDayEl = $("#currentDay");
var calendarContainerEl = $(".calendarContainer");

// =============== Dynamically render time blocks =====================
// for an amount of times equal to timesArray.length -1

// 1)create a row el and assign it to the variable of row
    // 1.1) set attribute on that row to give it a class="time-block"

// 2)create a div el and assign it to a variable of hourLabel
    // 2.1) set attribute on that div to give it a class = "col-sm-1 hour"
    // 2.2) set the text value of that div to equal to timesArray[i]

// 3) create a text area element and assign it to a variable of textArea
    // 3.1) set attribute on that text area to give it a class = "col-sm-10 description"
    // 3.2) ==optional=== set an attribute to give that text area a placeholder text of "enter calendar item here"

// 4) create a button element and assign it to a variable of saveButton
    // 4.1)set attributes on the button to give it a class="col-sm-1 saveBtn" TODO:Possibly add additional class for Font Awesome Icon
    // 4.2)===Temporary until Font Awesome class is added=== set the text value of the button to be "Save"

// 5) Append the row to the calendarContainerEl(defined in global)
// 6) Append the hourLabel to the row
// 7) Append the textArea to the row
// 8) Append the saveButton to the row

// ============================ Loop End ===============================
    






// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist