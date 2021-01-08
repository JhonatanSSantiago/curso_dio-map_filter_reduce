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
    }
]

const eMenorQueCinco = (numero) => {
    return numero < 5
}

const NewPets = pets.filter(({age}) => eMenorQueCinco(age))


/* const NewPets = pets.filter((pet) => {
    
    return pet.age < 5
}) */

console.log(pets)
console.log(NewPets)