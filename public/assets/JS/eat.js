document.getElementById('eatAdd').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/eats', {
    name: document.getElementById('eatsName').value,
    description: document.getElementById('eatsDesc').value,
    category: document.getElementById('eatsCategory').value
  })
    .then(() => {
      let eatElem = document.createElement('div')
      eatElem.className = 'card'
      eatElem.innerHTML = `
              <div class="card-body d-flex justify-content-center">
                <div class="card-info">
                  <h3 class="card-title">${document.getElementById('eatsName').value}</h3>
                  <p class="card-description">${document.getElementById('eatsDesc').value}</p>
                  <p class="card-type">${document.getElementById('eatsCategory').value}</p>
                </div>
              </div>`
      document.getElementById('eatList').appendChild(eatElem)

    })

    .catch(err => console.error(err))
})
