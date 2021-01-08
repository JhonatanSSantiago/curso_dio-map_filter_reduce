const pets = [
    {
        name: "rex",
        type: "dog",
        age: 10
    },
    {
        name: "kiko",
        type: "cat",
        age: 2
    },
    {
        name: "gabu",
        type: "fish",
        age: 1
    },
    {
        name: "ace",
        type: "dog",
        age: 5
    },
    {
        name: "tito",
        type: "cat",
        age: 3
    }
]

// Foreach nao retorna um novo array com  a mesma qunatidade de elementos


const forEachPetNames = []
pets.forEach((pet) => {
    forEachPetNames.push(pet.name)
})

console.log(forEachPetNames)