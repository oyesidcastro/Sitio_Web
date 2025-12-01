document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener los valores ingresados
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        return;
    }

    // Recuperar los usuarios almacenados en LocalStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar si el correo ya está registrado
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert('El correo electrónico ya está registrado. Por favor, inicia sesión.');
        return;
    }

    // Agregar el nuevo usuario al almacenamiento
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
    window.location.href = 'login.html';
});