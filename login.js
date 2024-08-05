document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginFormContainer = document.getElementById('login-form-container');
    const registerFormContainer = document.getElementById('register-form-container');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const loginErrorMessage = document.getElementById('login-error-message');
    const registerErrorMessage = document.getElementById('register-error-message');

    // Alterna para o formulário de cadastro
    showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginFormContainer.style.display = 'none';
        registerFormContainer.style.display = 'block';
    });

    // Alterna para o formulário de login
    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerFormContainer.style.display = 'none';
        loginFormContainer.style.display = 'block';
    });

    // Validação do formulário de login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'password') {
            window.location.href = 'index.html'; // Redireciona para a página principal após login bem-sucedido
        } else {
            loginErrorMessage.textContent = 'Usuário ou senha inválidos';
        }
    });

    // Validação do formulário de cadastro
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (newPassword === confirmPassword) {
            alert(`Cadastro realizado com sucesso para ${newUsername}!`);
            registerForm.reset();
            registerFormContainer.style.display = 'none';
            loginFormContainer.style.display = 'block';
        } else {
            registerErrorMessage.textContent = 'As senhas não coincidem. Por favor, tente novamente.';
        }
    });
});
