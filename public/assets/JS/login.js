document.getElementById('signUpButton').addEventListener('click', function () {

  event.preventDefault();

  axios.get('/api/users')
    .then(({ data }) => {

      let userExists;

      for (i = 0; i < data.length; i++) {
        if (document.getElementById('usernameSignUp').value == data[i].username) {
          userExists = true;
          return;
        }
      }

      if (userExists) {
        alert('That user already exists.')
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
});


  document.getElementById('signInButton').addEventListener('click', event => {
    // event.preventDefault()
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
          alert('Username does not exists, please sign up')
          document.getElementById('usernameSignIn').value = ''
          return;
        } else {
          localStorage.setItem('user', userId);
          location.href = '/'
        }

      })
      .catch(err => console.log(err));
    })
  // });
  
