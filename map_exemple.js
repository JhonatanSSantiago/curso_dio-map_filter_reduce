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

console.log(pets)

const petNames = pets.map((pet) => {
    return pet.name
})

console.log(petNames)