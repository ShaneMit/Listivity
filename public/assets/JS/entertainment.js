let apiTab = 'activities';

if (!localStorage.getItem('user')) {
  location.href = '/login.html'
}

document.querySelectorAll('.nav-link').forEach(tab => {
  tab.addEventListener('click', function (event) {
    if (event.target.textContent === 'Entertain') {
      apiTab = 'entertains'
      console.log(apiTab)
    } else if (event.target.textContent === 'Dining') {
      apiTab = 'eats'
      console.log(apiTab)
    } else if (event.target.textContent === 'Activities') {
      apiTab = 'activities'
      console.log(apiTab)
    };
    console.log(apiTab);
  });
});


document.querySelectorAll('.addItemBtn').forEach(button => {
  button.addEventListener('click', addItem);
})

function addItem() {
  event.preventDefault()
  axios.post(`/api/${apiTab}`, {
    name: document.getElementById(`${apiTab}Name`).value,
    description: document.getElementById(`${apiTab}Desc`).value,
    category: document.getElementById(`${apiTab}Category`).value,
    userId: localStorage.getItem('user')
  })
    .then(({ data }) => {
      console.log(data)
      let activitiesElem = document.createElement('div')
      activitiesElem.className = 'card d-flex flex-column justify-content-center'
      activitiesElem.id = `${apiTab}-${data.id}`
      activitiesElem.innerHTML = `
      <div class="card-body">
        <div class="card-info">
        <h3 class="card-title">${document.getElementById(`${apiTab}Name`).value}</h3>
        <p class="card-description">${document.getElementById(`${apiTab}Desc`).value}</p>
        <p class="card-type">${document.getElementById(`${apiTab}Category`).value}</p>
        </div>
        <div class="cardActions d-flex justify-content-between">
          <svg class="bi bi-trash" onclick="deleteActivity(this.dataset.id)" data-id=${data.id} width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
          </svg>
          <svg data-toggle="modal" data-target="#editModalCenter" class="bi bi-pencil-square" onclick="editCard(this.dataset.id)" data-id=${data.id} width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
          </svg>
        </div>
        `
      document.getElementById(`${apiTab}List`).appendChild(activitiesElem);
      document.getElementById(`${apiTab}Name`).value = '';
      document.getElementById(`${apiTab}Desc`).value = '';
      document.getElementById(`${apiTab}Category`).value = '';
    })

    .catch(err => console.error(err))
};

let editCard = function (id) {
  document.getElementById('saveChanges').dataset.id = id
  let card = document.getElementById(`${apiTab}-${id}`)
  let cardTitle = card.getElementsByTagName('h3')
  let cardText = card.getElementsByTagName('p')
  document.getElementById('editName').value = cardTitle[0].textContent
  document.getElementById('editDesc').value = cardText[0].textContent
  document.getElementById('editCategory').value = cardText[1].textContent
}

let saveEdit = function (id) {
  console.log(document.getElementById('editName').value)
  console.log(id)
  console.log(apiTab)
  let card = document.getElementById(`${apiTab}-${id}`)
  let cardTitle = card.getElementsByTagName('h3')
  let cardText = card.getElementsByTagName('p')
  axios.put(`/api/${apiTab}/${id}`, {
    name: document.getElementById('editName').value,
    description: document.getElementById('editDesc').value,
    category: document.getElementById('editCategory').value
  })
    .then((res) => {
      updateCard(id);
    })
    .catch(err => console.error(err))
}

let updateCard = function (id) {
  let card = document.getElementById(`${apiTab}-${id}`)
  let cardTitle = card.getElementsByTagName('h3')
  let cardText = card.getElementsByTagName('p')
  cardTitle[0].textContent = document.getElementById('editName').value
  cardText[0].textContent = document.getElementById('editDesc').value
  cardText[1].textContent = document.getElementById('editCategory').value
}

let deleteActivity = function (id) {
  // getTab();
  axios.delete(`/api/${apiTab}/${id}`)
    .then(() => { document.getElementById(`${apiTab}-${id}`).remove() })
    .catch(err => console.error(err))
}

