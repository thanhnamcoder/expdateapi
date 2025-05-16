document.getElementById('registerForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = '';

    if (password !== password2) {
        messageDiv.style.color = '#d32f2f';
        messageDiv.textContent = 'Passwords do not match!';
        return;
    }

    try {
        const response = await fetch('https://expdateapi.onrender.com/api/accounts/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (response.ok) {
            messageDiv.style.color = 'green';
            messageDiv.textContent = 'Register successful! You can now login.';
        } else {
            messageDiv.style.color = '#d32f2f';
            messageDiv.textContent = data.detail || 'Register failed!';
        }
    } catch (error) {
        messageDiv.style.color = '#d32f2f';
        messageDiv.textContent = 'Error connecting to server!';
    }
});
