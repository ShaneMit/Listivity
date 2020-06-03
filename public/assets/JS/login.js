document.getElementById('signUpButton').addEventListener('click', function () {

  event.preventDefault();

  axios.get('/api/users')
    .then(({ data }) => {

      let userExists;

      for (i = 0; i < data.length; i++) {
        if (document.getElementById('usernameSignUp').value == data[i].username) {
          userExists = true;
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

            axios.get('/api/users')

              .then(({ data }) => {
                let userId;

                for (i = 0; i < data.length; i++) {
                  if (document.getElementById('usernameSignUp').value == data[i].username) {
                    userId = data[i].id;
                  };
                }

                localStorage.setItem('userId', userId);

                signIn(userId);

              })
              .catch(err => console.log(err));

          })
          .catch(err => console.error(err))
      }

    })
    .catch(err => console.log(err));

});





const signIn = function (id) {

}