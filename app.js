

const eat = (user, admin) => {
    return `Hello ${user} you are an ${admin ? "admin" : "ordinary user"}`
}

// console.log(eat("Ehimare", true))
// const person = "Aisha"
// const message = `I have ${20+500} million naira`

// console.log(message)

const user = {
    name: "Ehimare",
    age: 20,
    admin: false
}

const { name, age } = user
console.log(name)


console.log(eat(name, user.admin))


const primeNum = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
const sumNum = primeNum.reduce((a, b) => a + b, 0)
console.log(sumNum)
const players = [
    {
        name: "Messi",
        age: 36,
        club: 'Inter Miami',
        country: 'Argentina',
        goals: 832
    },
    {
        name: "Ronaldo",
        age: 38,
        club: 'Al Nasr',
        country: 'Portugal',
        goals: 872
    },
    {
        name: "Neymar",
        age: 30,
        club: 'PSG',
        country: 'Brazil',
        goals: 600
    },
    {
        name: "Mbappe",
        age: 25,
        club: 'Real Madrid',
        country: 'France',
        goals: 400
    },
    {
        name: "Salah",
        age: 29,
        club: 'Liverpool',
        country: 'Egypt',
        goals: 500
    },
    {
        name: "Lewandowski",
        age: 33,
        club: 'Bayern Munich',
        country: 'Poland',
        goals: 700
    }
]

const newArr = primeNum.filter(num => num > 11)
console.log(newArr)

const playerNames = players.map(player => player.name)

console.log(playerNames)
const topPlayers = players.filter(player => player.age >= 30).map(player => player.name)

console.log(topPlayers)




topPlayers.forEach(player => {
    console.log(`${player} is a good player`)
})