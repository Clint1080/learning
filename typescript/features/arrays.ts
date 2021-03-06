const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

// Help with inference when extracting values

const aCar = carMakers[0];
const myCar = carMakers.pop()

// Prevent incompatible values

carMakers.push(100)

// Help with 'map'
carMakers.map(
    (aCar: string): string => {
    return aCar.toUpperCase();
})

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10-')
importantDates.push(new Date())
importantDates.push(100)

