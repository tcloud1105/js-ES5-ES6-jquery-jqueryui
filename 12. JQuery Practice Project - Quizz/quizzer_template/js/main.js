var awesomeQuiz = {
    
    settings:{
        results:[]
    },
    loadQuiz:function(){
        $('.panel_one h1').show("drop",500, function(){
            $('.start_quiz').addClass('started',500);
        })
        $('.start_quiz').on('click', function(){
            awesomeQuiz.showPanel(1)
            awesomeQuiz.listenNextQuestion();
        
        })
    },
    showPanel:function(position){
       var currentElement = $('div[data-panel="'+(position - 1)+'"]');
       currentElement.find('.wrapper').animate({left:"-=100px",opacity:0},500,function(){
           currentElement.addClass('hidden');
           var nextElement = $('div[data-panel="'+position+'"]');
           nextElement.removeClass('hidden');
           awesomeQuiz.showWrapper(nextElement);
       })
    },
    showWrapper:function(next){
        var wrapper = next.find('.wrapper');

        wrapper.fadeIn('500',function(){
            awesomeQuiz.manageOptions(next) 
        })
    },
    manageOptions:function(next){
        var options = next.find('.options');
        var children = options.find('div');
        var counter = 0;

        children.each(function(index,element){// animation of elements
          $(element).delay(counter).fadeIn(300);
          counter += 500;
        })
       
        children.on('click', function(){// selection of elements
            children.removeClass('active');
            next.addClass('valid');
            $(this).addClass('active');
        })

    },
    listenNextQuestion: function(){
        $('.next_question').on('click',function(){
            if(awesomeQuiz.validSelection($(this))){
                /// NEXT CONTAINER
                var next = $(this).data('next');
                awesomeQuiz.showPanel(next);
                awesomeQuiz.showProgressAndStore(next);
            }
        })
    },
    validSelection:function($this){
        parent = $this.parents().eq(1);
        if(parent.hasClass('valid')){
            return true;
        }else{
            $('.error').fadeIn('300',function(){
                $(this).delay(1000).fadeOut('300')
            })
        }
    },
    showProgressAndStore:function(panel){
        $('.progress .bar').animate({'width':'+=25%'},500);

        var options = $('div[data-panel="'+(panel - 1)+'"]').find('.options');
        options.find('div').each(function(index,el){
            if($(this).hasClass('active')){
              awesomeQuiz.settings.results.push($(this).text());
            }
        })
    }
}

$(document).ready(function(){
    awesomeQuiz.loadQuiz();
})