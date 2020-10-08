 

var button = document.querySelector('.myButton');

function click1(){
    console.log('clicked me !!')
}

function click2(){
    console.log('clicked me AGAIN !!');
    button.removeEventListener('click',click1)
}


button.addEventListener('click',click1)
button.addEventListener('click',click2)


function showPopup(){
    alert('buy me !!!')
}

document.addEventListener('click',showPopup)

// button.onclick = function(){
//     console.log('someone click me !!')
// }

// button.onclick = function(){
//     console.log('Other function !!')
// }



// button.onmouseover = function(){
//     console.log('Mouse over !!')
// }

// button.ondblclick = function(){
//     console.log('Double click !')
// }