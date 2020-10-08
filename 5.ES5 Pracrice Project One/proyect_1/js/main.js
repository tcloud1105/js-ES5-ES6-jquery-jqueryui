
var myDatabase = [
    {name:"James Burton",email:"James@gmail.com",age:25},
    {name:"Mark Robinson",email:"Mark@gmail.com",age:30},
    {name:"Lara Barbosa",email:"lara@gmail.com",age:28},
];

(function Avatar(db){
   var init = function(){
       generateList();
       enterUser();
   }

   function generateList(){
     var parent = document.getElementById('parent');
     template='';
     for(var i=0;i<db.length;i++){
        template +='<div class="col-sm-4">'
        template +='<div class="card">'
        template +='<div class="card-delete" data-card="'+i+'">X</div>'
        template +='<div class="card-block">'
        template +='<h3 class="card-title">'+db[i].name+'</h3>'
        template +='<p class="card-text">'
        tempalte +='<strong>Email</strong>:<span>'+db[i].email+'</span>'
        template +='</p>'
        template+='<p class="card-text">'
        template+='<strong>Age</strong>:<span>'+db[i].age+'</span>'
        template+='</p>'
        template+='</div>'
        template+='</div>'
        template+='</div>'
     }
     parent.innerHTML = ''
     parent.insertAdjacentHTML('afterbegin',template);
     deleteCard();
   }

   var enterUser = function(){

       function grabUser(){
         var username = document.querySelector('#user_name').value;
         var email = document.querySelector('#user_email').value;
         var age = document.querySelector('#user_age').value;
         var elements = [username,email,age];

         if(validateUser(elements)){
             document.querySelector('#myForm').reset();
           db.push({name:username,email:email,age:age});
           generateList();
         }else{
          document.querySelector('#error').style.display = 'block';
          setTimeout(function(){
            document.querySelector('#error').style.display = 'none';
          },2000)
         }
       }

       document.querySelector('#myForm').addEventListener('click', function(e){
          e.preventDefault();
          grabUser();
       })
   }

   var validateUser = function(elements){
      for(var i=0;i<elemnts.length;i++){
         if(elements[i]==""){
        return false;
         }
      }
      return true;
   }

   var deleteCard = function(){
     var buttons = document.querySelectorAll('.card-delete');

     var deleteThis = function(element){
         var card_id = parseInt(element.getAttribute('data-card'));
         db.splice(card_id,1);
         generateList();
     }

     for(var i=0; i<buttons.length; i++){
         buttons[i].addEventListener('click', function(e){
             deleteThis(this);
         })
     }

   }

   init();
}(myDatabase))