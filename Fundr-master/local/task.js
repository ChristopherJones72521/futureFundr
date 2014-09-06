function Task() { }

Task.prototype.add = function(title, duration)
{
    localStorage.setItem(title, duration);
}

Task.prototype.remove = function(title)
{
    localStorage.removeItem(title);
}

Task.prototype.update = function(title, duration)
{
    localStorage.setItem(title, duration);
}

Task.prototype.get = function(title)
{
    var task = new Array();
    task['title'] = title;
    task['duration'] = localStorage.getItem(title);
    return task;
}