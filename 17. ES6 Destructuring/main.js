// Destructuring Objects
const user = {
    name:"Francis",
    lastname:"Jones",
    age:25
};

// var name = user.name
// var lastname = user.lastname
// var age = user.age
// const {name} = user;
// const {lastname} = user;
// const {age} = user;
const {name,lastname,age} = user

const message = ({name,lastname,age},salute)=>{
    console.log(`my name is ${name} ${lastname}, age is ${age}, ${salute}`)
}

message(user,'hey')

// Destructuring Arrays
const cars = [
    'camaro',
    'nova',
    'A4'
]

//const camaro = cars[0]

//const [camaro,nova,a4] = cars
const [camaro,...rest] = cars
console.log(camaro)

// More on Destructuring -1
const users = [
    {name:"Francis",lastname:"Jones",age:25},
    {name:"Martha",lastname:"Smith",age:20},
    {name:"Helen",lastname:"Neron",age:16}
]

//const lastname = users[0].lastname;
const [{lastname}] = users
console.log(lastname)

// More on Destructuring -2
const users = {
    names:['francis','martha','ray']
}

const {names:[name1,name2]} = users
console.log(name2)

// Destructuring Function Arguments
function createCar({type,brand,model,color,year}){

}

const car = {
    brand:"Ford",
    model:"Focus",
    color:"Red",
    year:"2015",
    type:"fast"
}

createCar(car)