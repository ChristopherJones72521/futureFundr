$('#registerBtn').on('click', function() {
        
    // get user info
    var firstName = $('#firstName').text;
    var lastName = $('#lastName').text;
    var email = $('#email').text;
    var password = $('#password').text;
    
    // hash password
    var hashed = CryptoJS.MD5(password);
    
    // create the new user
    var user = new User();
    user.register(firstName, lastName, email, hashed);
    
});