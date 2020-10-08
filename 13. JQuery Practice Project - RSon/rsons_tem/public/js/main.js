
var tc = {
    server:'http://localhost:3004',
    init:function(){
      tc.addMenu();
      tc.headerScroll();
    },

    addMenu:function(){
        $("#menu").mmenu();
    },
    
    headerScroll:function(){
        var header = $('header');

        /// ON LOAD
        if($(window).scrollTop() >= 100){
            header.toggleClass('active');
        }

        /// WHEN SCROLL
        $(window).scroll(function(){
            if($(window).scrollTop() >= 100){
               header.addClass('active');
            }else{
                header.removeClass('active');
            }
        })
    },

    slider:function(){
        // SLIDER 
        $('.slick_home').slick({
            prevArrow:$('.custom_prev'),
            nextArrow:$('.custom_next')
        });

        $('.slick_home').on('afterchange', function(event,click,currentSlide,nextSlide){
           
        })
    },

   homeAlbums:function(){
       $.getJSON("js/json/albums.json", function(data){
           var template = "";

           data.albums.forEach(element=>{
               template += '<li class="album_list_item">';
               template += '<div class="item_cover" style="background:url(images/bin/albums/'+element.cover+')"></div>';
               template +='<h4>'+element.title+'</h4>';
               template += '<span>'+element.year+'</span>';
               template += '<a href="'+element.url+'" target="_blank">Get this record</a>'
               template += '</li>' 
           })

           $('.home_albums_list').append(template);
           ScrollReveal().reveal('.album_list_item',{
               delay:500,
               distance:'50px',
               easing:'ease-in'
           })
       })
   },

   homeLoadEvents:function(){
       $.ajax({
           url:this.server+"/events",
           type:"GET",
           dataType:"json",
           success:function(res){
              tc.homeEvents(res);
           }
       })
   },

   homeEvents:function(events){
     var wrapper = $('.home_events_wrapper');
     var start = 0;
     var limit = 4;

     function createEvents(){
        var counter = 1;
        for(var i=start;i<=limit; i++){
            if(i <= events.length - 1){

            
                var template='';

                template += '<div class="event_item hidden element_"'+i+'">';
                template += '<div>'+events[i].date+'</div>';
                template += '<div>'+events[i].venue+'</div>';
                template += '<div>'+events[i].location+'</div>';

                if(events[i].status){
                    template += '<div class="available"><span>Available</span></div>'
                }else{
                    template += '<div class="available not"><span>Available</span></div>'
                }
                template += '</div>'
                showEvents(template,counter,i);
                counter++;
         }else{
            $('.home_events_load_more_wrapper .btn').hide()
         }
        }

        start = start + 5;
        limit = limit + 5;

     }

     function listenToLoad(){
        $('.home_events_load_more_wrapper .btn').on('click',function(){
            createEvents();
        })
      }

      listenToLoad();

     function showEvents(template,counter,position){
       wrapper.append(template);

       setTimeout(function(){
         $('.element_'+position).removeClass('hidden')
       },200*counter)
     }

     createEvents();
   },

   subscribeWidgetStart:function(){
       var wrapper = $('.subscribe_widget');
       var template = '';

       template += '<div class="subcribe_wrapper container">'
       template +=    '<div class="col">'
       template +=        '<h3>Subscribe</h3>'
       template +=        '<span>Sign up for new release every month</span>'
       template +=     '</div>'
       template +=     '<div class="col">'
       template +=        '<div class="subscribe_input_wrapper">'
       template +=            '<div>'
       template +=                '<input type="text" id="subscribe_email">'
       template +=            '</div>'
       template +=            '<div>'
       template +=                '<div class="btn">Subscribe</div>'
       template +=            '</div>'
       template +=            '<div class="error_wrapper"></div>'
       template +=            '<div class="success_wrapper"></div>'
       template +=        '</div>'
       template +=     '</div>'
       template += '</div>'

       wrapper.append(template);
       tc.subscribeWidgetInputs();
   },

   subscribeWidgetInputs:function(){
       var subscribe = $('.subscribe_widget .btn');

       subscribe.click(function(){
           var email = $('#subscribe_email');
           
           if(validateInput(email.val())){
               /// MOVE FORWARD
               checkUserEmail(email.val());
           }else{
               /// ERROR
               showError('Sorry,Something is wrong');
           }
       })

       function checkUserEmail(email){
         $.ajax({
             url:server+"/email?email_like=" + email,
             type:"GET",
             dataType:"json",
             success:function(res){
               if(res.length <=0){
                   addUserToEmail(email);
               }else{
                  showError("Sorry, your email already exists")
               }
             }
         })
       }

       function addUserToEmail(email){
           $.ajax({
               url:server+"/email",
               type:"POST",
               dataType:"json",
               contentType:"application/json",
               data:JSON.stringify({email:email}),
               success:function(res){
                   var sucess = $('.subscribe_widget .sucess_wrapper');

                   $('#subscribe_email').val('');
                   sucess.text('');
                   setTimeout(function(){
                       success.text('');
                   },1000)
               }
           })
       }

       function showError(message){
           var error = $('.subscribe_widget .error_wrapper');
           error.text(message);
           setTimeout(function(){
               error.text('')
           },1000)
       }

       function validateInput(email){
        var regEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
       if(email==""){
           return false
       }

       if(!regEmail.test(email)){
           return false;
       }
       return true;
    }

   },

   getRandomNumber: function(start,end){
     return Math.floor(Math.random()*end) + start;
   },
   masonryConfig:[],
   masonryLimit:'5',
   masonryStartGallery:function(start,limit){
     $.ajax({
         url:"http://localhost:3004/gallery?_start="+start+"&_limit="+limit,
         type:"GET",
         success:function(response){
             tc.masonryRenderBlock(response);
            tc.masonryConfig = [start, limit];
            tc.masonryLimit = limit;
         }
     })
   },

   masonryRenderBlock:function(elements){
       var wrapper = $('.gallery_mansory_grid');
       template = "";

       elements.forEach(function(element){
         template += '<div class="grid-item grid-height-'+tc.getRandomNumber(1,5)+'" style="background:url(images/gallery/'+element.location_small+')" data-image="'+element.location+'">';
         template += '<div></div>'
         template += '</div>'
       })

       wrapper.append(template);
       wrapper.masonry({
           itemSelector:'.grid-item'
       })
       wrapper.on('layoutComplete',tc.mansoryAddBlock());
   },

   mansoryAddBlock:function(){
       var btn = $('.mansory_load_more');
       btn.click(function(){
           var start = tc.masonryConfig[0] + tc.masonryConfig[1];
           var limit = tc.masonryLimit;

           btn.hide();
           $.ajax({
            url:"http://localhost:3004/gallery?_start="+start+"&_limit="+limit,
            type:"GET",
            success:function(response){
                
               tc.masonryConfig = [start, limit]
               addNewBlock(response,btn);
            }
           })
       })

       function addNewBlock(element,btn){
        var wrapper = $('.gallery_mansory_grid');
       template = "";

       elements.forEach(function(element){
         template += '<div class="grid-item grid-height-'+tc.getRandomNumber(1,5)+'" style="background:url(images/gallery/'+element.location_small+')" data-image="'+element.location+'">';
         template += '<div></div>'
         template += '</div>'
       });
       
       /// Append and Reload Mansory
       var $box = $(template);
       wrapper.append($box).masonry("appended", $box);

       if(elements.length === tc.masonryLimit){
          btn.show();
        }
       }
   },

   contactForm:function(){
       // jquery Validator Plugins
       // rules are based on name attributes of each field
       $('#contact_form').validate({
           rules:{
               contact_message:{
                   required:true,
                   minlength:20
               },
               contact_name:{
                   required:true,
                   maxlength:100
               },
               contact_email:{
                   required:true,
                   email:true
               }
           },
           messages:{
            contact_message:{
                required:"Sorry, this field is required :(",
                minlength:"Really? less than 20 chars?"
            },
            contact_name:{
                required:"Sorry, this field is required :(",
                maxlength:"Sorry, only 100 charcaters"
            },
            contact_email:{
                required:"Sorry, this field is required :(",
                email:'This must be a valid email'
            }
           },
           submitHandler:function(form){
              var contact = {
                  message:$('#contact_message').val(),
                  name:$('#contact_name').val(),
                  email:$('#contact_email').val()
              }

              $.ajax({
                  url:"http://localhost:3004/contact",
                  type:"POST",
                  dataType:"json",
                  contentType:"application/json",
                  data:JSON.stringify(contact),
                  success:function(res){
                      var element = $('#contact_form')
                      var success = element.find('.success')

                      element.find('input, textarea').val('')
                      success.text('Thank you, we will check it later')

                      setTimeout(function(){
                          success.text('')
                      },2000)
                  }
              })
           }
       })
   }
}

$(function(){
    tc.init();
})