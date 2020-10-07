
// VARIABLE TYPES
var Ron = 'Ron';
var number = 10;
var boolean = false;
var array = [56,'Avatar',true];
var object = {
    name:'James',
    lastname:'Jones'
}

// IF STATEMENTS
var logo;
var username= 'James';
var lastname = 'Jones';

if(logo){
    // console.log('Logo has a value')
}

if(username === 'James'){ 
     // console.log('It is james') 
}

if(lastname !== 'Stevenson'){
    // console.log('This is not Stevenson')
}


// SWITCH
var slot = 3;

switch(slot){
    case 1:
       // console.log('Won a Tv');
        break;
    case 2:
        //console.log('Won a Ps');
        break;
    case 3:
        //console.log('Won a PC');
        break;
    case 4:
        //console.log('Won a guitar');
        break;
    case 5:
        //console.log('Won a Bike')
        break;
    default:
        //console.log('Spin again')
}

// OPERATOR

//== ADITION ==//
var previous = 200;
var current = 100;
var total = ' The total is: ' + (previous + current);
current += previous;

var username = 'James';
var message = 'Welcome back ' + username;

//== SUBSTRACTION ==//
var total = 'total amount is: ' + ( previous - current );
var message = 'Welcome back' - username;

//== MULTIPLY ==//
var total = 'total amount is ' + ( previous * current );

//== DIVIDE ==//
var total = 'total amount is ' + ( previous / current );


//== COMPARE ==//
// console.log(2 == 2); // TRUE
// console.log(2 == '2'); // TRUE
// console.log(2 === '2'); // FALSE 
// console.log(2 === 2); // TRUE
// console.log(2 != 2); // FALSE 
// console.log(2 != '2'); // FALSE
// console.log(2 !== '2'); // TRUE
// console.log('James' == 'James') // TRUE

//== GREATER THAN - LESS THAN ==//
// console.log( 2 > 2 ); // FALSE
// console.log( 5 > 2 ); // TRUE 
// console.log( 2 < 2 ); // FALSE
// console.log( 2 < 5 ); // TRUE
// console.log( 2 <= 2 ); // TRUE
// console.log( 2 >= 2 ); // TRUE

//== && AND || OPERATOR ==//
// if( 1 == 1 && 1 > 5 ){ console.log('true') } // FALSE
// if( 1 == 1 && 7 > 5 ){ console.log('true') } // TRUE
// if( 1 == 1 || 7 > 5 ){ console.log('true') } // TRUE
// if( 1 == 2 || 1 > 5 ){ console.log('true') } // FALSE


//== TERNARY ==//
var x = 10;
var y = 10;

// if( x == y ){
//     console.log('Equal')
// } else {
//     console.log('Not equal')
// }

var result = x == y ? 'Equal' : 'Not Equal';

// FOR  LOOP

var x = 0;
for(x; x <= 5; x++){
    //console.log('The iteration number is ' + x )
}

var y = 10;
for(y; y >= 1; y--){
    //console.log('The iteration number is ' + y )
}

for(var i = 0;i <= 5;i++){
    for(var j = 0;j <= 5;j++){
        //console.log('First loop: ' + i + " - IL:" + j)
    }
}


for(var i = 1;i <= 5;i++){
    //console.log(i);
 
    if(i == 2){
        break;
    }
}
 
for(var i = 1;i <= 5;i++){
    if(i == 2){
        continue;
    }
    //console.log(i);
}


var user = ['James','Brian','Lucas'];
for(var n = 0; n < user.length ; n++){
    //console.log(user[n])
}

// WHILE LOOP

var logged = true;
var i = 0; // 3

while(logged){
    if(i == 3){
        logged = false;
    }
    //console.log(i);
    i++
}

//// FUNCTIONS
function firstFunction(){
    //console.log('My first function');
}
firstFunction();
/////////////////////
var logged = false;
//console.log(logged);

function logIn(){
    logged = true;
    //console.log(logged);
    //console.log('Welcome back')
}
/////////////////////
function arguments(name,arg2){
    //console.log(name);
    //console.log(arg2)
}

arguments(1,1);
///////////////////
function calc(a,b){
    var sum = a +b;
    return sum;
}

var result = calc(5,5);
var other = calc('James',' jones')

//console.log(result)
/console.log(other)