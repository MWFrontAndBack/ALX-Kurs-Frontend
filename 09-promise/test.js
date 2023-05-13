const catFactsList = document.querySelector('#catFactsList')
// fetch
// Domyslna akcja w fetch jest GET
// fetch zwraca Promise

const renderCats = (data) => {
    catFactsList.innerHTML += `
    <li><div> 
    <p>${data.title}<p/>
    <p>${data.description}<p/>
     <div/> </li>`



    // })
}

const loadCats = () => {
    return fetch('https://openlibrary.org/works/OL45804W.json')
        .then((response) => {
            return response.json()
        })
}

// tzw. laczenie Promisow
// po wywolaniu loadCats(), Promise i .then jest kontynuowane
loadCats().then(data => {
    renderCats(data)
})