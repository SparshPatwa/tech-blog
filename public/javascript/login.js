async function signupFormHandler(event) {
  event.preventDefault();

  //grab data from the sign-up form
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  //fetch() POST request to api/users
  //conditional to make sure that all fields have values
  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    // check the response status
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      //when the user logs in they are automatically redirected
      document.location.replace('/dashboard');
      debugger
      idleLogout();
    } else {
      alert(response.statusText);
    }
  }
}

var loginform = document.querySelector('.login-form')
if (loginform) loginform.addEventListener('submit', loginFormHandler);

var signupform = document.querySelector('.signup-form')
if (signupform) signupform.addEventListener('submit', signupFormHandler);
