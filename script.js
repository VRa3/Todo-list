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
    $("ul").append("<li><span id=\"removeIcon\"><i class=\"fa fa-trash\"></i></span> " + todoText +"<span id=\"importantIcon\"><i class=\"emptyStar fa fa-star-o\"></i></span></li>");
    $("input").val("");
  }
});

$(".fa-plus").on("click", function(){
  $("input").fadeToggle(200);
})


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
  $(this).parent().toggleClass("strong");
  
  if($(this).children().hasClass("fa fa-star")){
  $(this).children().addClass("selectedStar");
  }
  event.stopPropagation();
});
