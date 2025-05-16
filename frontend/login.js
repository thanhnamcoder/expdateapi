document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = '';

    try {
        const response = await fetch('https://8813-115-78-8-142.ngrok-free.app/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (response.ok && data.access) {
            messageDiv.style.color = 'green';
            messageDiv.textContent = 'Login successful!';
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            setTimeout(function() {
                window.location.href = 'home.html';
            }, 500);
        } else {
            messageDiv.style.color = '#d32f2f';
            messageDiv.textContent = data.detail || 'Login failed!';
        }
    } catch (error) {
        messageDiv.style.color = '#d32f2f';
        messageDiv.textContent = 'Error connecting to server!';
    }
});
