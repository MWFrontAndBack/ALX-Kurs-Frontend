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

// zadania

// zad1 


const helloMessage = (name) => {

    return 'hello ' + name
}
console.log(helloMessage('michal'))

// zad2

const sumElemnts = (collection) => {
    return collection.reduce((start, next) => start + next.price, 0)
}

console.log(sumElemnts(products))
// zad3
imiona = ['ania', 'michal', 'alex']
const getLetters = (words) => {
    let wordsLengt = words.map((w) => w.length)
    return wordsLengt
}
console.log(getLetters(imiona))
//zad4

const getTheMostExpensiveProduct = (collection) => {
    let sorted = collection.sort(function (a, b) { return a.price - b.price });
    return sorted[0]
}
console.log(getTheMostExpensiveProduct(products))

//zad5
imiona = ['ania', 'michal', 'alex']

const findNameIndex = (collection, name) => {
    for (let i = 1; i < collection.length; i++) {
        if (collection[i] == name) {
            return i
        }
    }

}
const findNameIndexsecond = (collection, sarch) => {
    let index = -1;
    collection.forEach((item, ind) => {
        if (item == sarch) {
            index = ind
        }
    })
    return index;

}


console.log(findNameIndex(imiona, 'alex'))
console.log(findNameIndexsecond(imiona, 'alex'))

// saearch by text

const users = [
    {
        author: "Damian",
        message: "jest dobrze ale trudno",

    }, {
        author: "Kacper",
        message: "niewiem co napisac",
    }
]
const findSomethingInMessge = (collection, search) => {
    return collection.filter(c => c.message.includes(search))
}

console.log(findSomethingInMessge(users, 'nie'))


const products3 = [
    {
        name: "Jablko",
        category: "Fruits",
        price: 4.99
    },
    {
        name: "Banan",
        category: "Fruits",
        price: 7.00
    },
    {
        name: "Chleb",
        category: "Bakery",
        price: 3.99
    }
]

const getSumOfFruits = (collection) => {
    return collection.filter(c => c.category == 'Fruits').reduce((start, next) => start + next.price, 0)
}

console.log(getSumOfFruits(products3))


// zadanie 