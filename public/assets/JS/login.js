document.getElementById('signUpButton').addEventListener('click', function () {
  event.preventDefault();
  if (!document.getElementById('usernameSignUp').value) {
    document.getElementById('usernameSignUpError').style.display = "block";
    document.getElementById('usernameSignUpError').textContent = "Please enter a username.";
  } else {
    axios.get('/api/users')
      .then(({ data }) => {
        let userExists;
        for (i = 0; i < data.length; i++) {
          userExists = document.getElementById('usernameSignUp').value == data[i].username ? true : false;
        }
        if (userExists) {
          document.getElementById('usernameSignUpError').style.display = "block";
          document.getElementById('usernameSignUpError').textContent = "That username already exists. Try again.";
          return;
        } else {
          axios.post('/api/users', {
            username: document.getElementById('usernameSignUp').value
          })
            .then(({ data }) => {
              localStorage.setItem('user', data.id)
              location.href = '/'
            })
            .catch(err => console.error(err))
        }
      })
      .catch(err => console.log(err));
  }
});


document.getElementById('signInButton').addEventListener('click', event => {
  if (!document.getElementById('usernameSignIn').value) {
    document.getElementById('usernameSignInError').style.display = "block";
    document.getElementById('usernameSignInError').textContent = "Please enter a username.";
  } else {
    axios.get('/api/users')
      .then(({ data }) => {

        let userExists;
        let userId;

        for (i = 0; i < data.length; i++) {
          if (document.getElementById('usernameSignIn').value == data[i].username) {
            userExists = true;
            userId = data[i].id;
          }
        }

        if (!userExists) {
          document.getElementById('usernameSignInError').style.display = "block";
          document.getElementById('usernameSignInError').textContent = "That username doesn't exist. Please try again or register below.";
          document.getElementById('usernameSignIn').value = ''
          return;
        } else {
          localStorage.setItem('user', userId);
          location.href = '/'
        }

      })
      .catch(err => console.log(err));
  }
});

function RestrictSpace() {
  if (event.keyCode == 32) {
    return false;
  }
}