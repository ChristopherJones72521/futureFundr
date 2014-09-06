$('#loginBtn').click(function() {
    
    // get user info
    var email = $('#email').text;
    var password = $('#password').text;
    
    // hash password
    var hashed = CryptoJS.MD5(password);
    
    // create the new user
    var user = new User();
    user.login(email, hashed);
    
});