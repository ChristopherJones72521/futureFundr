/*
*  Add a new task
*/
$("#addTaskBtn").click(function() {
    // Get the info
    var title = $('#title').val();
    var duration = $('#duration').val();
    
    // add a new task
    var task = new Task();
    task.add(title, duration);
    
    window.location.href = "index.html";
});