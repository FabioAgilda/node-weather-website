const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-01')
const messageTwo = document.querySelector('#message-02')

// messageOne.textContent = 'Foasfdsdb'

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(`/weather?search=${location}`).then((response) => {
        response.json().then(({location, forecast, error})=>{
            if (error){
                messageOne.textContent = error
            }else{
                messageOne.textContent = `${location}`
                messageTwo.textContent = `${forecast}`
            }
        })
    })
})
