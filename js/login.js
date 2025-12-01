document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener los valores ingresados
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Recuperar los usuarios almacenados en LocalStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar si el correo y la contraseña coinciden
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`¡Bienvenido, ${user.name}! Has iniciado sesión exitosamente.`);
        // Redirigir a una página principal, si aplica:
        window.location.href = 'index.html';
    } else {
        alert('El correo electrónico o la contraseña no coinciden. Por favor, inténtalo de nuevo.');
    }
});