$(".service").mouseenter(function(){
    $(this).css("background-color","#e0ebe8");
    $(this).find(".icon").css("color","#22746b");
    $(this).find("hr").css("border-color","black");
    $(this).find("p").css("color","black")
 
 })
 
 $(".service").mouseleave(function(){
    $(this).css("background-color","#fff");
    $(this).find(".icon").css("color","#D9bf77");
    $(this).find("hr").css("border-color","black");
    $(this).find("p").css("color","#545454")
 
 })
 