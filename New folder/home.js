//var registeredUsers = []; // Array to store registered users

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var userExists = checkUserExists(email, password);

    if (userExists) {
        alert("You already have an account.");
    } else {
        window.location.href = "register.html";
    }
}

function checkUserExists(email, password) {
    var users = []
      
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            return true;
        }
    }

    return false;
}

function register() {
    var email = document.getElementById("reg-email").value;
    var password = document.getElementById("reg-password").value;

    var userExists = checkUserExists(email, password);

    if (userExists) {
        alert("You already have an account.");
    } else {
        // Create a new user object and add it to the registeredUsers array
        var newUser = { email: email, password: password };
        users.push(newUser);

        // Redirect to home page and display welcome message
        window.location.href = "home.html" + encodeURIComponent(email);
    }
}