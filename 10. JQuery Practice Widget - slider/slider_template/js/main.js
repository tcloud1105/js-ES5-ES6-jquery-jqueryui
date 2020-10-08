$(document).ready(function() {

    var itemsLength = $('.cards_container .item').length;
    var current = 1;
    $('.total_slide').text(itemsLength);

    $('.cardSlider .btn_prev').on("click", function(){
      if(current > 1){
          current = current -1;
          showSlide(current);
      }else{
          current = itemsLength;
          showSlide(current);
      }
    })
    $('.cardSlider .btn_next').on("click", function(){
        if(current !== itemsLength){
            current = current+1;
            showSlide(current);
        }else{
            current = 1;
            showSlide(current);
        }
    })

   function showSlide(slideNumber){
      $('.cards_container .item').removeClass('active');
      $('div[data-id="'+slideNumber+'"]').addClass('active');

      $('.current_slide').text(slideNumber);
   }

});