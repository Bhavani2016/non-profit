
$(document).ready(function(){
    $("#inner-social a").hover(function(){
		$(this).parent("li").css("background-color", "rgb(137, 178, 82)");
        $(this).children("a").css('color', '#fff');
		$(this).css("color","rgb(255, 255, 255)");
	});
    
    $("#inner-social li").hover(function(){
		$(this).css("background-color","rgb(137, 178, 82)");
		$(this).children("a").css("color","rgb(255, 255, 255)");
	});	
    $("#inner-social li").mouseleave(function(){
		$(this).css("background-color", "rgb(255, 255, 255)");
		$(this).children("a").css("color","rgb(137, 178, 82)");
	});
});
