const pets = [
    {
        name: "rex",
        type: "dog",
        age: 10,
        weight: 30
    },
    {
        name: "kiko",
        type: "cat",
        age: 2,
        weight: 3
    },
    {
        name: "gabu",
        type: "fish",
        age: 1,
        weight: 1
    },
    {
        name: "ace",
        type: "dog",
        age: 5,
        weight: 25
    },
    {
        name: "tito",
        type: "cat",
        age: 3,
        weight: 5
    }
]

const totalWeightDogs = pets
.filter((pet) => {
    return pet.type === 'dog'
}).reduce((total, pet) => {
    return total + pet.weight
}, 0)

console.log(totalWeightDogs)
