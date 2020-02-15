console.log('Client side javascript loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    const location = search.value
    const fetchURL = 'http://localhost:3000/weather?address=' + location
    fetch(fetchURL).then( (response) => {
        response.json().then( (data) => {
            if (!data.error) {
                messageOne.textContent = 'Location: ' + data.location
                messageTwo.textContent = 'Forecast: ' + data.forecast
            } else {
                messageOne.textContent = 'Error: ' + data.error
            }
        })
    })
})