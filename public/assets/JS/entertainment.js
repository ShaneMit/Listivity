document.getElementById('entertainmentAdd').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/entertainments', {
    name: document.getElementById('entertainmentsName').value,
    description: document.getElementById('entertainmentsDesc').value,
    category: document.getElementById('entertainmentsCategory').value
  })
    .then(() => {
      let entertainmentElem = document.createElement('div')
      entertainmentElem.className = 'card'
      entertainmentElem.innerHTML = `
              <div class="card-body d-flex justify-content-center">
                <div class="card-info">
                  <h3 class="card-title">${document.getElementById('entertainmentsName').value}</h3>
                  <p class="card-description">${document.getElementById('entertainmentsDesc').value}</p>
                  <p class="card-type">${document.getElementById('entertainmentsCategory').value}</p>
                </div>
              </div>`
      document.getElementById('entertainmentList').appendChild(entertainmentElem)

    })

    .catch(err => console.error(err))
})
