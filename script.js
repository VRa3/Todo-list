$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  })
  event.stopPropagation();
});

$("input[type=text]").on("keypress", function(Event){
  if(Event.which === 13){
    var todoText = $(this).val();
    $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span>" + todoText +"</li>");
    $("input").val("");
  }
});

$(".fa-plus").on("click", function(){
  $("input").fadeToggle(200);
})
