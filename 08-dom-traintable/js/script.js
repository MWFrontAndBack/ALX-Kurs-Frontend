console.log('trains app')

//from (Warszawa)
// - to (Lublin)
// - time (16:30)
// - date (23.04.2023)
// - name (Sniezka)
let trains = JSON.parse(localStorage.getItem('trains')) ?? [];
// [
//     {
//         from: "Warszawa",
//         to: "Lublin",
//         time: "16:30",
//         date: new Date('2023-04-23T16:30:00'),
//         name: "śnieżka"
//     },
//     {
//         from: "Kraków",
//         to: "Gdańsk",
//         time: "12:45",
//         date: new Date('2023-04-24T12:45:00'),
//         name: "bursztyn"
//     },
//     {
//         from: "Gdynia",
//         to: "Wrocław",
//         time: "08:15",
//         date: new Date('2023-04-25T08:15:00'),
//         name: "złota jesień"
//     },
//     {
//         from: "Lublin",
//         to: "Katowice",
//         time: "20:00",
//         date: new Date('2023-04-26T20:00:00'),
//         name: "śnieżka"
//     },
//     {
//         from: "Poznań",
//         to: "Kraków",
//         time: "10:30",
//         date: new Date('2023-04-27T10:30:00'),
//         name: "bursztyn"
//     },
//     {
//         from: "Gdańsk",
//         to: "Wrocław",
//         time: "14:00",
//         date: new Date('2023-04-28T14:00:00'),
//         name: "złota jesień"
//     },
//     {
//         from: "Wrocław",
//         to: "Lublin",
//         time: "09:20",
//         date: new Date('2023-04-29T09:20:00'),
//         name: "śnieżka"
//     },
//     {
//         from: "Lublin",
//         to: "Gdańsk",
//         time: "13:45",
//         date: new Date('2023-04-30T13:45:00'),
//         name: "złota jesień"
//     },
//     {
//         from: "Kraków",
//         to: "Warszawa",
//         time: "18:10",
//         date: new Date('2023-05-01T18:10:00'),
//         name: "śnieżka"
//     },
//     {
//         from: "Wrocław",
//         to: "Kraków",
//         time: "07:30",
//         date: new Date('2023-05-02T07:30:00'),
//         name: "bursztyn"
//     },
//     {
//         from: "Gdańsk",
//         to: "Poznań",
//         time: "11:20",
//         date: new Date('2023-05-03T11:20:00'),
//         name: "złota jesień"
//     },
//     {
//         from: "Lublin",
//         to: "Kraków",
//         time: "22:15",
//         date: new Date('2023-05-04T22:15:00'),
//         name: "śnieżka"
//     },
//     {
//         from: "Kraków",
//         to: "Gdynia",
//         time: "15:40",
//         date: new Date('2023-05-05T15:40:00'),
//         name: "złota jesień"
//     },
// ]

let trainsList = document.querySelector('#trainsList');
let saerchButton = document.querySelector('#saerchButton')
let searchInput = document.querySelector('#searchTrainByName')
let connectionForm = document.querySelector('#addConnection');
const selectSort = document.querySelector('#trainsSort');
const selectCity = document.querySelector('#chooseCity')
function renderCitySelect(collection) {
    selectCity.innerHTML = ""
    collection.forEach((c) => {
        const option = document.createElement('option')

        option.value = c.from
        option.text = c.from
        selectCity.appendChild(option)
    })
}

function render(collection) {
    trainsList.innerHTML = ''

    collection.forEach(c => {
        trainsList.innerHTML += `<li> <div>
            <p>${c.from} </p>
            <p>${c.to}</p>
            <p>${c.time} </p>
            <p>${c.date} </p>
            <p>${c.name} </p>

             </div> </li>`
    })


}

const filterTrains = (collection, find) => {
    return collection.filter(c => c.name.toLowerCase().includes(find.toLowerCase()))

}
const FindTrainsByName = () => {
    let find = searchInput.value;
    let filtredArray = filterTrains(trains, find)
    console.log(filtredArray)

    render(filtredArray)


}

const addNewConnection = (event) => {
    event.preventDefault()
    let connection = {
        from: connectionForm.elements.from.value,
        to: connectionForm.elements.to.value,
        time: connectionForm.elements.time.value,
        date: connectionForm.elements.date.value,
        name: connectionForm.elements.name.value
    }
    trains.push(connection)
    let traincon = [connection, ...trains]
    localStorage.setItem('trains', JSON.stringify(traincon))
    render(trains)
}
const sortConnections = (collection, order) => {
    if (order == 'asc') {
        return collection.sort((a, b) => a.date - b.date)
    } else {
        return collection.sort((a, b) => b.date - a.date)

    }
}
const addSortingOption = () => {
    let sortType = selectSort.value
    let sortedTrains = sortConnections(trains, sortType)
    render(sortedTrains)
}

const findCityWithConnection = (collection, location) => {
    return collection.filter(c => c.from.toLowerCase() == location.toLowerCase() || c.to.toLowerCase() == location.toLowerCase())
}

const seaerchCitiesWithConnectionToChoosenCity = (collection) => {
    console.log('connection')
    let location = selectCity.value;
    let citiesConnected = findCityWithConnection(collection, location)
    render(citiesConnected)



}



selectCity.addEventListener('change', () => { seaerchCitiesWithConnectionToChoosenCity(trains) })
selectSort.addEventListener('change', addSortingOption)
connectionForm.addEventListener('submit', addNewConnection)
saerchButton.addEventListener('click', FindTrainsByName)


function display(conllection) {
    if (conllection && conllection.length > 0) {
        renderCitySelect(trains)
        render(trains)
    } else {
        renderCitySelect([])
        render([])
    }
}
display(trains)



