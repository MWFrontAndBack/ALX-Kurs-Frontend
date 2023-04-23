console.log('js6')


// funkcja getName, która przyjmie tablice obiektów liste imion jesli talica obiektów bedzie 

const names = [
    {
        name: 'Damian',
        age: 50
    },
    {
        name: 'Pawel',
        age: 40

    },
    {
        name: 'Dominika',
        age: 25

    }
]

const getNames = (collection) => {
    if (collection.length == 0) return null;
    let names = collection.map((c) => c.name)
    return names;
}

let tab = getNames(names)
console.log(tab)


//funkcja get avg tablica obiektów produktów
const products = [
    {
        name: 'Bread',
        price: 9.99,
        category: "Bakery"
    }
    ,
    {
        name: 'Banan',
        price: 3.25,
        category: "Fruits"

    },
    {
        name: 'Apple',
        price: 4.00,
        category: "Fruits"
    }
]
const avg = (collection) => {
    console.log('funkcja')
    let avg = collection.reduce((start, next) => start + next.price, 0) / collection.length

    return avg
}
let tab2 = avg(products)
console.log(tab2)


function filterFruits(collection, category) {
    let filtred = collection.filter(f => f.category === category)
    return filtred;
}

let filter = filterFruits(products, 'Fruits')
console.log(filter)