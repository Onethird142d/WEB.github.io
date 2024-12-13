// Handle login functionality
const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'user' && password === '1234') {
            window.location.href = 'home.html'; // Redirect to manga page
        } else {
            alert('Invalid username or password. Try again.');
        }
    });
}
