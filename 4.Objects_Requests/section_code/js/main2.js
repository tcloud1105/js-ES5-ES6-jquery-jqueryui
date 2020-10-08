
/////// GETTING DATA
// var http = new XMLHttpRequest();
// var url = 'https://jsonplaceholder.typicode.com/users';
// var method = "GET";

// http.open(method,url);
// http.onreadystatechange = function(){
//     if(http.readyState === XMLHttpRequest.DONE && http.status === 200){
//         console.log(JSON.parse(http.response))  
//     } else if(http.readyState === XMLHttpRequest.DONE && http.status !== 200){
//         console.log('something went wrong')
//     }
// }
// http.send();

/////// POST DATA
var http = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/users';
var method = "POST";

var db = JSON.stringify({name:"jules",username:"Jules2345"});

http.open(method,url);
http.setRequestHeader("Content-type","application/json");
http.onreadystatechange = function(){
    if(http.readyState === XMLHttpRequest.DONE && http.status === 201){
        console.log(JSON.parse(http.response))  
    } else if(http.readyState === XMLHttpRequest.DONE && http.status !== 201){
        console.log('something went wrong')
    }
}
http.send(db);