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

const pesoTotal = pets.reduce((total, pet) => {
    console.log(`Total: ${total}`)
    console.log(`Pet: ${pet.name}`)
    return total + pet.weight
}, 0)

console.log(pesoTotal);

const totalPeso = pets.reduce((total, pet) => {
  
    return {
        totalAge: total.totalAge + pet.age,
        totalPeso: total.totalPeso + pet.weight
    }
}, {totalAge: 0, totalPeso: 0})

console.log(totalPeso)