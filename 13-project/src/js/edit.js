import { getApartmentById } from "./shared/apartmetns";
let editapartametn = document.querySelector('#edithouse');
let details = document.querySelector('#details')
let id = window.location.search;

let convert = (id) => {
    let nums = id.match(/\d+/g);
    return nums;

}

const render = (appartament) => {
    details.innerHTML = ""
    details.innerHTML += `
    <p>${appartament.title}<p/>
    <p>${appartament.description}<p/>
    <p>${appartament.price}<p/>

    `
}


const appartmentId = convert(window.location.search)
getApartmentById(appartmentId).then(apartment => render(apartment))

const saveObject = (appartament) => {
    fetch(`http://localhost:8000/apartments/${convert(id)}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(appartament)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data updated:', data);
        })
        .catch(error => {
            console.error('Error updating data:', error);
        });

}

const handleUpdateHouse = (event) => {
    event.preventDefault();

    let title = editapartametn.querySelector('#title').value;
    let description = editapartametn.querySelector('#description').value;
    let price = editapartametn.querySelector('#price').value;
    let publication_date = editapartametn.querySelector('#publication_date').value;
    let photos = editapartametn.querySelector('#photos').value;

    let appartament = {
        title: title,
        description: description,
        price: price,
        publication_date, publication_date,
        photos, photos
    }
    saveObject(appartament)

    window.location.href = 'http://localhost:1234';

}
editapartametn.addEventListener('submit', handleUpdateHouse)