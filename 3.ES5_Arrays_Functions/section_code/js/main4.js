

// setTimeout(function(){
//     console.log('howdy partner');
// },2000);

var hello = setInterval(function(){
    console.log('howdy partner');
},2000)


setTimeout(function(){
    clearInterval(hello)
},6000)