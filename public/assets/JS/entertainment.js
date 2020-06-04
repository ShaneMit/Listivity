document.getElementById('entertainsAdd').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/entertains', {
    name: document.getElementById('entertainsName').value,
    description: document.getElementById('entertainsDesc').value,
    category: document.getElementById('entertainsCategory').value
  })
    .then(({ data }) => {
      console.log(data)
      let entertainsElem = document.createElement('div')
      entertainsElem.className = 'card d-flex flex-column justify-content-center'
      entertainsElem.id = `entertains-${data.id}`
      entertainsElem.innerHTML = `
      <div class="card-body">
        <div class="card-info">
        <h3 class="card-title">${document.getElementById('entertainsName').value}</h3>
        <p class="card-description">${document.getElementById('entertainsDesc').value}</p>
        <p class="card-type">${document.getElementById('entertainsCategory').value}</p>
        </div>
        <div class="cardActions d-flex justify-content-between">
          <svg class="bi bi-trash" onclick="deleteEntertainment(this.dataset.id)" data-id=${data.id} width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
          </svg>
          <svg data-toggle="modal" data-target="#editModalCenter" class="bi bi-pencil-square" onclick="editEntertainment(this.dataset.id)" data-id=${data.id} width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
          </svg>
        </div>
        `
      document.getElementById('entertainsList').appendChild(entertainsElem);
      document.getElementById('entertainsName').value = '';
      document.getElementById('entertainsDesc').value = '';
      document.getElementById('entertainsCategory').value = '';


    })

    .catch(err => console.error(err))
})

let editEntertainment = function (id) {
  document.getElementById('saveChanges').dataset.id = id
  let card = document.getElementById(`entertains-${id}`)
  let cardTitle = card.getElementsByTagName('h3')
  let cardText = card.getElementsByTagName('p')
  document.getElementById('editName').value = cardTitle[0].textContent
  document.getElementById('editDesc').value = cardText[0].textContent
  document.getElementById('editCategory').value = cardText[1].textContent

}

let saveEdit = function (id) {
  console.log(document.getElementById('editName').value)
  console.log(id)
  let activeTab = document.getElementsByClassName('nav-link active')[0].textContent
  console.log(activeTab)
  let apiTab
  let category = 'category'
  if (activeTab === 'Entertain') {
    apiTab = 'entertains'

  } else if (activeTab === 'Dining') {
    apiTab = 'eats'
    category = 'cuisine'
  } else if (activeTab === 'Activities') {
    apiTab = 'activities'
  }
  console.log(apiTab)
  let card = document.getElementById(`${apiTab}-${id}`)
  let cardTitle = card.getElementsByTagName('h3')
  let cardText = card.getElementsByTagName('p')
  axios.put(`/api/${apiTab}/${id}`, {
    name: document.getElementById('editName').value,
    description: document.getElementById('editDesc').value,
    category: document.getElementById('editCategory').value
  })
    .then((res) => console.log(res))
    .catch(err => console.error(err))
}

let deleteEntertainment = function (id) {
  axios.delete(`/api/entertains/${id}`)
    .then(() => { document.getElementById(`entertains-${id}`).remove() })
    .catch(err => console.error(err))
}