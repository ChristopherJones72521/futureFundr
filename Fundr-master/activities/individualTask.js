// Get the task title
var url = window.location.href;
var title = url.split('#')[1];

// Get the task
var task = new Task();
task = task.get(title);

// Update elements of UI
$('#title').val(task.title);
$('#duration').val(task.duration);

// Delete task btn
$('#deleteBtn').click(function() {
    
    var newTask = new Task();
    newTask.remove(title);
    window.location.href = "index.html";
    
});

// Add countdown timer
$('#countdown').text(task.duration);

// Count down
var count = task.duration;
var counter=setInterval(timer, 10000);

function timer()
{
    count=count-1;
    
    if (count <= 0)
    {
        clearInterval(counter);
        //counter ended, do something here
        intel.xdk.notification.vibrate();
        intel.xdk.notification.vibrate();
        intel.xdk.notification.vibrate();

        return;
    }
    
    $("#countdown").text(count);
}