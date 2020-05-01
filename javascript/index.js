const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
]
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

const hobbies = ['Sports', 'Cooking']
const foods = ['Pizza', 'Cheese']

/**  Objects, properties & methods **/
const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log(`Hi, I am ${this.name}`);
    },
    // Isto aqui não funciona com this
    // greet: () => {
    //     console.log(`Hi, I am ${this.name}`);
    // }
}
person.greet();

/** High Order Functions & Arrays */

// Foreach
companies.forEach(company => {
    console.log(company.name)
})

// For of
for (let company of companies) {
    console.log(company.name)
}

// For in
for (let key in companies) {
    console.log(companies[key].name)
}

// Filter
// Cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
const canDrink = ages.filter(age => age >= 21)
const retailCompanies = companies.filter(company => company.category === 'Retail')

// Map
// Devolve um novo Array como resultado.
const hobbyMap = hobbies.map(hobby => 'Hobby: ' + hobby)
const companyString = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)

// Sort
// Ordenação
const sortAges = ages.sort((a, b) => a - b)

// Reduce
// Executa uma função reducer (provida por você) para cada membro do array, resultando num único valor de retorno.
const ageSum = ages.reduce((total, age) => total + age, 0)
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)


/** Spread Operators **/

// Copiar objetos
const copiedPerson = { ...person }
// Copiar arrays
const newArray = [...hobbies, ...foods] // Fusão de dois arrays diferentes

/**  Rest Operators */
const toArray = (...args) => {
    return args
}
const novoArray = toArray(1, 2, 3, 4, 5)

/**  Destructuring **/
const printName = ({ name, age }) => {
    console.log(name, age)
}
printName(person)

const { name, age } = person

// Pegar elementos do array
const [first, second] = hobbies

/** Callback & Promises */

// Callback
// const fetchData = callback => {
//     setTimeout(() => {
//         callback('Done!')
//     }, 1500)
// }

// const main = () => {
//     setTimeout(() => {
//         console.log('Timer is done!')
//         fetchData(text => {
//             console.log(text) 
//             fetchData(text2 => {
//                 console.log(text2)
//             })
//         })
//     }, 2000)
// }
// main()

// Promise
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!')
        }, 1500)
    })
    return promise
}

const main = () => {
    setTimeout(() => {
        console.log('Timer is done!')
        fetchData().then(text => {
            console.log(text)
            return fetchData()
        })
            .then(text2 => {
                console.log(text2)
            })
    }, 2000);
}
main()