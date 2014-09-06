// Get all tasks
var tasks = Object.keys(localStorage);

// Calculate work time
function getWorkTime()
{
    var tasks = Object.keys(localStorage);
    var workTime = 0;
    for (key in tasks)
    {
        var number = localStorage.getItem(tasks[key]);
        if (number != null)
        {
            workTime += parseInt(number);
        }
    }
    return workTime;
}

var workTime = getWorkTime();

// Display work time chart
function updatePieChart()
{
    var work = getWorkTime();
    work = work / 60;
    var workPercent = work / 15;
    var freePercent = 1 - workPercent;
    var arr = new Array();
    arr[0] = workPercent;
    arr[1] = freePercent;
    return arr;
}

// Display work time stats
$('#freeRemaining').text(Math.round(((900 - workTime) / 60)) + " free hours remaining.");
$('#workRemaining').text(Math.round(workTime/60) + " hours of work remaining.");

// Display all tasks
for (key in tasks)
{
    if (tasks[key] != 'setItem' && tasks[key] != 'removeItem' && tasks[key] != 'clear')
        $('.tasklist').append("<p><a href=\"individualTask.html#"+ tasks[key] +"\">"+tasks[key]+"</a></p>");
}

// Clear tasks
$('#clearTasksBtn').click(function(e) {
    e.preventDefault();
    
    localStorage.clear();
    
    window.location.href = "index.html";
});