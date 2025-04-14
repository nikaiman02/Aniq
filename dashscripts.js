// Set a mock username (In real projects, this could be dynamically fetched from a server or session storage)
document.getElementById('username').textContent = 'John Doe';  // Replace 'John Doe' with the actual username

// Logout functionality (for now, just reload the page or redirect)
document.getElementById('logout-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default action

    // Here you can add logic to clear user data, session, etc.
    alert("You have logged out.");

    // For now, just redirect to the login page (or home page as per your flow)
    window.location.href = "login.html";  // Adjust this based on your actual login page URL
});
