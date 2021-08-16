document.getElementById('submit-button').addEventListener('click', function () {
    const emailField = document.getElementById('input-email');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('input-password');
    const userPassword = passwordField.value;

    if (userEmail == 'boss@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
});