
// difference between let, var and const
const value=10;
let winner = true;
winner = false

console.log(winner)

// String Template
function employee(){
    let name = 'cedric'
    let age = 31
    let position = "Manager"
    //console.log("my name is "+name+" I am "+ age + " works as "+ position)
     
    console.log(`my name is ${name} I am ${age} works as ${position}`)
}

employee()

// Helper Functions
// FOREACH Helper
artists = ['Clapton','U2','Lamar']

// for(var i=0;i<=artists.length;i++){
//     console.log(artists[i])
// }

artists.forEach(artist => {
    console.log(artist);
});

// FOREACH EXAMPLE-1
const names = ['Francis','Cedric','Don']
let template = '';
names.forEach(function(name){
    template +=`<div>Hi my  name is ${name}</div>`
    //document.body.insertAdjacentElement('afterbegin',`<div>Hi my  name is ${name}</div>`)
})

document.body.insertAdjacentHTML('afterbegin',template);

// FOREACH EXAMPLE-2
const purchases = [{product:"Phone",number:2,amount:100},
                   {product:"TV",number:5,amount:100},
                   {product:"Mac",number:10,amount:100}
                ]

let total = 0;

purchases.forEach(function(item){
    total += item.number * item.amount;
})

console.log(total)

// MAP HELPER
// MAP EXAMPLE-1
const numbers = [1,2,3,4,5]
const newArray = numbers.map(function(item){
    return item*10;
})

console.log(newArray)


// var otherArray = []
// for(var i=0;i<=numbers.length;i++){
//     otherArray.push(i*10)
// }
// console.log(otherArray);

// MAP EXAMPLE-2
const users = [
    {user:'cedric',age:30,eyes:'black'},
    {user:'daniel',age:45,eyes:'brown'},
    {user:'martin',age:60,eyes:'black'},
]

const listOfUsers = users.map(function(item){
    return item.user;
})

listOfUsers.forEach(function(item){
    var select = document.querySelector('select');

    select.insertAdjacentElement('afterbegin',`
      '<option value="${item}">${item}<option>'
    `)
})

// FILTER HELPER
// FILter EXAMPLE-1
const products = [
    {name:'ipad',category:'device', number:20,price:200},
    {name:'Sony 3d',category:'TV', number:0,price:400},
    {name:'E256',category:'Blender', number:3,price:50},
    {name:'Super Vision',category:'TV', number:7,price:500},
    {name:'Iphone 7',category:'phones', number:40,price:2}
]

const tv = products.filter(function(item){
    return item.category === 'TV'
})

console.log(tv)

// FILTER EXAMPLE-2

const results = products.filter(function(product){
    return product.category==='TV'&&
    product.number >0 &&
    product.price > 200
})

console.log(results)

// FIND HELPER
// FIND EXAMPLE-1
const brands = [
    {name:"Apple",id:1},
    {name:"Sony",id:1},
    {name:"Samsung",id:1},
    {name:"Samsung",id:1},]
const result = brands.find(function(brand){
    return brand.name === 'Samsung'
})

console.log(result)

// FIND EXAMPLE-2
const cars = [
    {brand:"Ford",price:500,available:2,type:'Sport Car'},
    {brand:"Nissan",price:200,available:5,type:'Wagon'},
    {brand:"Chevy",price:300,available:4,type:'Sport Car'},
    {brand:"Porsche",price:100,available:1,type:'Urban'},
];

function getResults(price,type){
    cars.find(function(car){
        return car.price < price
        && car.available > 0
        && car.type === type
    })
}

document.querySelector('.search').addEventListener('click',function(){
    var price = parseInt(document.querySelector('#price').value);
    var type = document.querySelector('#type');

    let results = getResults(price,type);

    if(results){
        console.log(`Found ${results.brand} for $ ${results.price}`)
    }else{
        console.log(`No Car found`)
    }
})


// EVERY AND SOME HELPER
// EVERY returns true if every element match the condition, false otherwise
// SOME returns true if one of the elements match the condition, false otherwise

const students = [
    {name:"Francis",grade:4},
    {name:"Martin",grade:5},
    {name:"Martha",grade:7},
]

const every = students.every(function(student){
    return student.grade > 6
})

const some = students.some(function(student){
    return student.grade > 6
})

console.log(every)
console.log(some)

// REDUCE HELPER
// REDUCE EXAMPLE-1
const previous = 200;
const current = [
    {expense:'Guitar',amount:200},
    {expense:'Mic',amount:100},
    {expense:'Strap',amount:100},
];

const results = current.reduce(function(sum,expense){
    return sum + expense.amount;
}, previous)

// sum=previous
// sum = sum+ expense.amount
console.log(results)

// REDUCE EXAMPLE-2
const users = [
    {name:'Francis',lastname:'Norton',age:25},
    {name:'Martha',lastname:'Suchard',age:19},
    {name:'Rob',lastname:'Maker',age:21},
]

const names = users.reduce(function(start,user){
    start.push(user.name)
    return start
},[])

console.log(names)