document.getElementById('activityAdd').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/activities/', {
    name: document.getElementById('activitiesName').value,
    description: document.getElementById('activitiesDesc').value,
    category: document.getElementById('activitiesCategory').value,
    userId: `${localStorage.getItem('user')}`
  })
    .then(({ data }) => {
      let activityElem = document.createElement('div')
      activityElem.className = 'card d-flex flex-column justify-content-center'
      activityElem.id = `activities-${data.id}`
      activityElem.innerHTML = `
      <div class="card-body">
        <div class="card-info">
        <h3 class="card-title">${document.getElementById('activitiesName').value}</h3>
        <p class="card-description">${document.getElementById('activitiesDesc').value}</p>
        <p class="card-type">${document.getElementById('activitiesCategory').value}</p>
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
      document.getElementById('activityList').appendChild(activityElem);
      document.getElementById('activitiesName').value = '';
      document.getElementById('activitiesDesc').value = '';
      document.getElementById('activitiesCategory').value = '';

    })

    .catch(err => console.error(err))
})

let deleteActivity = function (id) {
  axios.delete(`/api/activities/${id}`)
    .then(() => { document.getElementById(`activity-${id}`).remove() })
    .catch(err => console.error(err))
}
