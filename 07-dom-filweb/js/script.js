
let container = document.querySelector('#movieContainer');

const movies = [
    {
        poster: 'https://via.placeholder.com/150x200',
        title: 'Dziecko Rosemary',
        year: 2021,
        description: 'Opis filmu lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis orci scelerisque, finibus erat sit amet, ullamcorper metus.'
    },
    {
        poster: 'https://via.placeholder.com/150x200',
        title: 'Django',
        year: 2021,
        description: 'Opis filmu lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis orci scelerisque, finibus erat sit amet, ullamcorper metus.'
    },
    {
        poster: 'https://via.placeholder.com/150x200',
        title: 'Rekinado',
        year: 2021,
        description: 'Opis filmu lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis orci scelerisque, finibus erat sit amet, ullamcorper metus.'
    },
    {
        poster: 'https://via.placeholder.com/150x200',
        title: 'Pszczółka Maja',
        year: 2021,
        description: 'Opis filmu lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis orci scelerisque, finibus erat sit amet, ullamcorper metus.'
    }
]

const renderMovies = (collection) => {
    container.innerHTML = ""
    collection.forEach((m) => {
        container.innerHTML += `<div class="movie">
    <img src="https://via.placeholder.com/150x200" alt="Tytuł filmu">
    <h2>${m.title}</h2>
    <div class="year">Rok produkcji: ${m.year}</div>
    <div class="date-added">Data dodania: 01.01.2022</div>
    <p>${m.description}</p>
  </div>`
    })
}

const filtredMoviesByTitle = (collection, movieName) => {
    return movies.filter((m) => m.title.toLocaleLowerCase().includes(movieName.toLocaleLowerCase()))
}

const filtrMovies = (event) => {
    event.preventDefault()



}



renderMovies(movies)