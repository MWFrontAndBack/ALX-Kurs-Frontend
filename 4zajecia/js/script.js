console.log('hello')


let form = document.querySelector("#form");
let chat = document.querySelector('#chat');

let messages = [

]
const handleForm = (event) => {
    event.preventDefault()
    let message = {
        author: form.elements.author.value,
        message: form.elements.message.value

    }
    messages.push(message)

    render()

}

const render = () => {
    chat.innerHTML = ""

    for (m of messages) {
        chat.innerHTML += `<li>${m.author}</li> <li>${m.message}</li>`
    }
}
render()

form.addEventListener('submit', handleForm)

