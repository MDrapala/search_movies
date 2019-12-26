const movieForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')

movieForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const name = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    messageFour.textContent = ''
    messageFive.textContent = ''

    fetch('/movies?name='+ name).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error
        } else {
            messageOne.textContent = data.title
            messageTwo.textContent = 'src="http://image.tmdb.org/t/p/w500'+ data.pictures + '"'
            messageThree.textContent = data.describe
            messageFour.textContent = data.popularity
            messageFive.textContent = data.language
        }
    })
})
})