var BASE_URL = "http://agiler.eligundry.com:8000/";

function User() { }

User.prototype.register = function(firstName, lastName, emailU, hashed)
{
    $.ajax({
        type: "POST",
        url: BASE_URL + "api/register",
        crossDomain: true,
        data: {
            first_name: firstName,
            last_name: lastName,
            email: emailU,
            password: hashed
        },
        dataType: "jsonp",
        success: function(response) {
            alert(response);
        },
        failure: function(response) {
            alert(response);
        }
    });
}

User.prototype.login = function(emailU, hashed)
{
    $.ajax({
        type: "POST",
        url: BASE_URL + "api/login",
        crossDomain: true,
        data: {
            email: emailU,
            password: hashed
        },
        dataType: "jsonp",
        success: function(response) {
            alert(response);
        },
        failure: function(response) {
            alert(response);
        }
    );
}

User.prototype.get = function(id, accessToken)
{
        
}