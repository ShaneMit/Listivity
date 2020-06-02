document.getElementById('activityAdd').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/activities', {
    name: document.getElementById('activitiesName').value,
    description: document.getElementById('activitiesDesc').value,
    category: document.getElementById('activitiesCategory').value
  })
    .then(() => {
      let activityElem = document.createElement('div')
      activityElem.className = 'card'
      activityElem.innerHTML = `
              <div class="card-body d-flex justify-content-center">
                <div class="card-info">
                  <h3 class="card-title">${document.getElementById('activitiesName').value}</h3>
                  <p class="card-description">${document.getElementById('activitiesDesc').value}</p>
                  <p class="card-type">${document.getElementById('activitiesCategory').value}</p>
                </div>
              </div>`
    document.getElementById('activityList').appendChild(activityElem)

    })

    .catch(err => console.error(err))
})
