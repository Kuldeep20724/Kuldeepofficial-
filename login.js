document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulate login process
    // Here you would typically send a request to the server for authentication
    // and handle the response accordingly
    alert('Login successful!');
    // Redirect to another page or perform other actions as needed
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulate authentication
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === 'user@example.com' && password === 'password') {
        // Authentication successful, store user data in localStorage
        localStorage.setItem('currentUser', JSON.stringify({ email: email }));
        // Redirect to profile page
        window.location.href = 'user.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

