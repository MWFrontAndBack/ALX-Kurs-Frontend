console.log('hello')

let chats = JSON.parse(localStorage.getItem('chats'));
const form = document.querySelector('#messageForm');
const messageList = document.querySelector('#messageList');
const saerchInput = document.querySelector('#search')
const searchButton = document.querySelector('#searchButton')
const foundList = document.querySelector('#foundList')



form.addEventListener('submit', function (event) {
    event.preventDefault()
    let mess = {
        author: form.elements.author.value,
        message: form.elements.message.value

    }

    chats.push(mess)
    localStorage.setItem('chats', JSON.stringify(chats));

    render(chats)

})

const render = (collection) => {
    messageList.innerHTML = ""
    collection.forEach(c => {
        messageList.innerHTML += `<li>${c.author} </li><li>${c.message} </li>`
    })
}
const renderfound = (collection) => {
    foundList.innerHTML = ""
    collection.forEach(c => {
        foundList.innerHTML += `<li>${c.author} </li><li>${c.message} </li>`
    })
}

const filtred = (collection, filter) => {
    return collection.filter((c) => c.message.includes(filter))

}
searchButton.addEventListener('click', function () {

    console.log(saerchInput.value)
    let filtredList = filtred(chats, saerchInput.value)
    console.log(filtredList)
    renderfound(filtredList)
}

)

if (chats) {
    render(chats);
} else {
    chats = [];
    localStorage.setItem('chats', JSON.stringify(chats));
}