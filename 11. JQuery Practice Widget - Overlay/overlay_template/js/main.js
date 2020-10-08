$(document).ready(function() {
    
    function startOverlay(id){
        $(".overlay-veil").fadeTo("500","0.8",function(){
            var element = $('div[data-overlayItem="'+id+'"]');
            element.fadeIn("300");
            element.addClass('active');
        })
    }

    function closeAllOverlays(){
     
        $('.overlay-component').each(function(){
            if($(this).hasClass('active')){
              //$(".overlay-veil").fadeOut();
              $(this).fadeOut("300",function(){
                $(".overlay-veil").fadeOut();
                  $(this).removeClass('active');
              })
            }

            })
    }
    $('.closeOverlay').on("click",function(){
        closeAllOverlays()
    })
    $("overlay-item-click").on("click", function(e){
        e.preventDefault();

        var overlayId = $(this).data('overlay');
        startOverlay(overlayId);
    })
});