const loginUrl = 'http://localhost:8080/api/v1/empresas/login';

// Obtén el formulario y el mensaje de error por su id
const loginForm = document.querySelector('form');
const errorMessageElement = document.getElementById('error-message');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const credentials = {
    username: username,
    password: password
  };

  fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(response => response.json())
    .then(data => {
      const token = data.token;//obtener token
      localStorage.setItem('token', token);//guardar token

      window.location.href = 'listado.html';
    })
    .catch(error => {
      
      console.error('Error en el inicio de sesión:', error);

      const errorMessage = 'Credenciales Incorrectas: ' + error;
      errorMessageElement.textContent = errorMessage;
    });
});



