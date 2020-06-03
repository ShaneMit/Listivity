document.getElementById('signUpButton').addEventListener('click', function () {

  event.preventDefault();

  axios.post('/api/users', {
    username: document.getElementById('usernameSignUp').value
  })
    .then(({ data }) => {
      console.log(data);

      axios.get('/api/users')

        .then(({ data }) => {
          let userId;

          for (i = 0; i < data.length; i++) {
            if (document.getElementById('usernameSignUp').value == data[i].username) {
              userId = data[i].id;
            };
          }

          localStorage.setItem('userId', userId);

        })
        .catch(err => console.log(err));

    })
    .catch(err => console.error(err))
});








// document.getElementById('signInButton').addEventListener('click', function () {

//   event.preventDefault();
//   let username = document.getElementById('usernameSignIn').value;



//   axios.get('/api/users/1', {

//   })
//     .then(({ data }) => {
//       console.log(data);
//     })
//     .catch(err => console.error(err))
// });