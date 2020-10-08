
var parent = document.querySelector('.parent');
var ul = parent.querySelector('ul')
var div = document.createElement('div');


div.textContent = 'My new div';
div.style.color = 'red';
div.style.fontSize = '20px';


//parent.appendChild(div)
//parent.insertBefore(div,ul)

/*
    beforebegin
    afterbegin
    beforeend
    afterend
*/

parent.insertAdjacentElement('afterend',div);
parent.insertAdjacentHTML('beforebegin','<div>hello</div>')


//parent.removeChild(ul);
ul.remove();
