// ES5 - PROTOTYPE
function Car(){}

var car = new Car()

Car.prototype.status = 'New';
Car.prototype.wheels = 4;
Car.prototype.available = function(){
    console.log('available')
}

console.log(car.__proto__)

// ES6 - CLASSES -1
class Car{
    constructor(){
        this.status = 'New';
        this.wheels = 4;
        this.available = ()=>{
            console.log('available')
        }
    }
}

const car = new Car();
const ford = new Car();
ford.color = 'red'

console.log(car)

// ES6 - CLASSES -2

class Car{
    // constructor(options){
    //     this.status = options.status;
    //     this.wheels = options.wheels;
    //     this.avail = options.avail;
    // }

    constructor({status,wheels,avail}){
        this.status = status;
        this.wheels = wheels;
        this.avail = avail;
    }

    otherFunc(){
        console.log("hey")
    }
}

const car = new Car({
    status:'New',
    wheels:4,
    avail:()=>{
        console.log("available")
    }
})

console.log(car)

// INHERITANCE
class Ford extends Car{
    constructor(){
        super()
    }
}

const ford = new Ford()
console.log(ford)