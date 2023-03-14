const openLightBox = function(event){
  $(".lightbox-content").html("<img src='"+event.target.src+"'>");

  $(".lightbox").addClass("active");
}

$(function(){
  $("body").on("click",".gallerys img", openLightBox);

  $(".lightbox-back").on("click",function(){
    $(".lightbox").removeClass("active");
  })
})