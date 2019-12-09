let a = 1
let b = a

console.log(a, b) // 1 1

b += 1

console.log(a, b) // 1 2

////

let car = {
  color: 'red',
  year: 2019,
  km: 0
}

let newCar = car

console.log(car, newCar)

newCar.year = 2000

let newCar = Object.assign({}, car)



let car = {
  color: 'red',
  year: 2019,
  km: 0,
  owner: {
    name: 'Nikolas',
    age: 31
  }
}

newCar.owner.age = 26

JSON.parse()
JSON.stringify()

let newCar = JSON.parse(JSON.stringify(car))