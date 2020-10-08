
// FILTER
// var array = [1,5,10,20,30];
// var names = ['John','Helen','Frances','Mark','Helen'];

// var filters = array.filter(function(item){
//     return item > 9;
// })

// var filteredNames = names.filter(function(name){
//     return name !== 'Helen'
// })

// console.log(filteredNames)


// MAP
// var numbers = [1,5,10,20,30];

// var filtered = numbers.map(function(number){
//     return number + 5;
// })

// console.log(filtered)
// console.log(numbers)

// FOREACH
var names = ['John','Helen','Frances','Mark','Helen'];

names.forEach(function(name){
    if(name === 'Helen') {
        console.log('Hi my name is ' + name)
    }
})
