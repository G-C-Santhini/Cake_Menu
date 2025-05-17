// Toggle between Login and Signup Forms
function toggleForm() {
    let loginForm = document.getElementById("login-form");
    let signupForm = document.getElementById("signup-form");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }
}

// Sign Up Function
function signup() {
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;
    let error = document.getElementById("signup-error");

    if (!username || !password) {
        error.textContent = "All fields are required!";
        return;
    }

    if (localStorage.getItem(username)) {
        error.textContent = "Username already exists!";
        return;
    }

    localStorage.setItem(username, password);
    alert("Signup successful! You can now log in.");
    toggleForm();
}

// Login Function
function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;
    let error = document.getElementById("login-error");

    if (!username || !password) {
        error.textContent = "All fields are required!";
        return;
    }

    let storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        localStorage.setItem("loggedInUser", username);
        alert("Login successful!");
        window.location.href = "menu.html";  // Redirect to the cake shop menu page
    } else {
        error.textContent = "Invalid username or password!";
    }
}

// Logout Function
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "auth.html"; // Redirect to login page
}

// Check if User is Logged In (Protect Menu Page)
function checkAuth() {
    if (!localStorage.getItem("loggedInUser")) {
        window.location.href = "auth.html"; // Redirect to login page if not logged in
    }
}
