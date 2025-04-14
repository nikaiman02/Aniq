// Login Page Logic
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent the form from refreshing the page

        // Get input values from the login form
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple login validation
        if (email === "" || password === "") {
            alert("Please fill in both fields.");
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
        } else {
            // Simulate a successful login
            alert("Login successful! (This is a mock login for now.)");

            // Log the email and password to the console (for demonstration purposes)
            console.log("Email:", email);
            console.log("Password:", password);

            // Redirect user to the dashboard (or homepage)
            window.location.href = "dashboard.html";  // You can create a dashboard page later
        }
    });
}

// Function to validate email format
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Signup Page Logic
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent the form from refreshing the page

        // Get input values from the signup form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple signup validation
        if (name === "" || email === "" || password === "") {
            alert("Please fill in all fields.");
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
        } else {
            // Simulate a successful registration
            alert("Registration successful! (This is a mock registration for now.)");

            // Log the name, email, and password to the console (for demonstration purposes)
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Password:", password);

            // Redirect user to the login page after registration
            window.location.href = "login.html";  // After registration, user is redirected to the login page
        }
    });
}
