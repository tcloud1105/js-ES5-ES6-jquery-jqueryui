// ES5 function
const value = function(name, age){
    return `My name is ${name} and my age is ${age}`
}

console.log(value('Francis',24))

// ES6 Arrow function
const value =(name, age)=>{
    return `My name is ${name} and my age is ${age}`
}

console.log(value('Francis',24))

const add = (x,y)=> x+y
console.log(add(2,2))

const onearg = x => x+10
console.log(onearg(5))

// ES6 Function
const cars = {
    brands : ['Ford','Audi','BMW'],
    category:'Sport Car',
    message:function(){
       return this.brands.map(brand=>{
           console.log(`${brand} is a ${this.category}`)
       })
    }
};
 cars.message()

 // Object Literals

 const request = (url,data)=>{
     $.ajax({method:'POST',url,data})
 }

 request('http://whatever.com',{car:'Ford'})

 // Object Literals 2
 const createCharacter = (name,power,friend)=>{
     return{
         name,
         power,
         getFriend(){
             return friend;
         }
     }
 }

 const character = createCharacter('superman','fly','lois lane')
 console.log(character)

 // Default Arguments
 function randomBrands(){
     const brands = ['Ford','Audi','BMW']
     return brands[Math.floor(Math.random()*brands.length)]
 }

 function cars(brand = randomBrands()){
     console.log(`My car is ${brand}`)
 }

 cars()

 // REST Operator
 function args(...args){
    console.log(`My name is ${args[0]}, i am ${args[1]}, my eyes are ${args[2]}`)
 }

 console.log('cedric',31,blue)

 // SPREAD Operator

 const brands = ["Ford","Nissan"]
 const otherBrand = ["Audi","BMW"]

//  const newArray = brands.concat(otherBrand)
//  newArray.push('new element')

const newArray = [...brands,...otherBrand,'New Class']
console.log(newArray)
