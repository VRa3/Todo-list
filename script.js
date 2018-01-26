$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

$("ul").on("click", "#removeIcon", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  })
  event.stopPropagation();
});

$("input[type=text]").on("keypress", function(Event){
  if(Event.which === 13){
    var todoText = $(this).val();
    $("ul").append("<li><span id=\"removeIcon\"><i class=\"fa fa-trash\"></i></span> " + todoText +"</li>");
    $("input").val("");
  }
});

$(".fa-plus").on("click", function(){
  $("input").fadeToggle(200);
})

// making select star work

$("ul").on("mouseenter", "#importantIcon", function(){
  $(this).children().removeClass("emptyStar");
  $(this).children().addClass("selectedStar");
});

$("ul").on("mouseleave", "#importantIcon", function(){
  
  $(this).children().removeClass("selectedStar");
  $(this).children().addClass("emptyStar");
  
  if($(this).children().hasClass("fa fa-star")){
    
  $(this).children().removeClass("emptyStar");
  $(this).children().addClass("selectedStar");
  }
});

$("ul").on("click", "#importantIcon", function(event){
  $(this).children().toggleClass("fa fa-star-o");
  $(this).children().toggleClass("fa fa-star");
  
  if($(this).children().hasClass("fa fa-star")){
  $(this).children().addClass("selectedStar");
  }
  
  event.stopPropagation();
});
