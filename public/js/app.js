const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = ''
// messageTwo.textContent = 'two'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                let msgText = 'Temperature ' + data.forecast.temperature + ' degree celcius. Feels like ' + data.forecast.feelsLike + ' degree celcius'
                messageTwo.textContent = msgText
                console.log(data.forecast)
            }
        })
})
})