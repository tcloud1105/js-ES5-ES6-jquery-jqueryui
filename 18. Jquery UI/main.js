// INTERACTIONS
// DRAGGABLE
document.ready(function(){
  $('.draggable').draggable({
      axis:'x',// move the objects ovet the x-axis
      cancel:'.not_this',
      containment:'parent',
      grid:[50,20],
      handle:".handle",
      opacity:"0.35",
      drag:function(event,ui){
        console.log(ui.position)
      }
  });

  // DROPPABLE
  $('.droppable').droppable({
    accept:'.draggable',
    drop:function(event,ui){
      $(this).addClass('accepted')

      console.log(ui.draggable.attr('class'))
    },
    out:function(event,ui){
      $(this).removeClass('accepted')
    }
  })

  // RESIZABLE
  $('.resizable').resizable({
    //animate:true,
    //animationDuration:100,
    aspectRatio:true,
    containment:'.block',
    ghost:true,
    grid:[50,50],
    maxHeight:150,
    minHeight:50
  });

  // SELECTABLE
  $('#selectable').selectable({
    filter:'.available',
    selected:function(event,ui){
      console.log(ui.selected.innerText)
    }
  });

  // SORTABLE
  $('#sortable').sortable();

  $('.trigger').click(function(){
    var list =  $('#sortable').sortable("toArray");
    console.log(list)
  })

  // WIDGETS
  // ACCORDION
  $('$accordion').accordion({
    active:2,
    animate:200,
    collapsible:true,
    event:'mouseover'
  });

  // DATEPICKER
  $('#datepicker').datepicker({
    minDate:0,
    maxDate:10,
    dayNamesMin:["lun",'mar','mer','jeu','ven','sam','dim']
  })

  // AUTOCOMPLETE
  var list = [
    'ford',
    'chevy',
    'honda'
  ]

  $('#tags').autocomplete({
    source:list, // autocomplete needs a source dataset
    minLength:3 
  });

  // SLIDER
  $('#slider').slider({
    min:10,
    max:1000,
    step:100,
    range:true,
    change:function(event,ui){
      //console.log(ui.value)
      console.log(ui.values[0])
      console.log(ui.values[1])
    }
  })

  //ADDCLASS AND REMOVECLASS
  $(document).click(function(){
    // $('.button').addClass('otherClass',1000,function(){
    //   $(this).removeClass('otherClass',1000)
    // })

    // $('.button').toggleClass('otherClass',1000)

    $('.button').switchClass('button','otherClass',1000)
  })

  
  // EFFECTS
  // $(document).click(function(){
  //  $('.button').effect('bounce',1000,function(){
  //    console.log('done')
  //  })
  // })

  $(document).click(function(){
    $('.button').toggle('bounce',1000,function(){
      console.log('done')
    })
   })
})