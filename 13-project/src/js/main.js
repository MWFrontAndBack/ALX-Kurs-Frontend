import { getApartments } from "./shared/apartmetns"
let appartamentList = document.querySelector('#applist')
console.log('script connected')
const state = {
    apartaments: [],
}
const loadApartaments = () => {
    return fetch('http://localhost:8000/apartments')
        .then(response => {
            return response.json()
        })
}
const render = (apartaments) => {
    appartamentList.innerHTML = "";

    apartaments.forEach(apart => {
        appartamentList.innerHTML += ` <li>
        <p>${apart.title}</p>
        <a href="/edit.html?id=${apart.id}"> Przejdz do edycji  </a>

        <p>${apart.publication_date}</p>

        <a href="/details.html?id=${apart.id}"> Przejdz do mieszkania  </a>

        <p><img src="${apart.photos}" alt="Italian Trulli">
        </p>

      </li>`
    })
}

const setApartementsState = (newState) => {
    state.apartaments = newState;
    render(newState)
}



getApartments().then((data) => {
    setApartementsState(data)
})