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

$("ul").on("click", "#importantIcon", function(event){
  $(this).parent().toggleClass("strong");
  $(this).toggleClass("selectedStar");
  event.stopPropagation();
});
