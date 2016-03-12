$(document).ready(function(){
	$("div").delegate(":empty", "click", function(){
		$(this).css("background-color", "pink");
	});
});

/*
$(document).ready(function(){
    $("div").delegate("p", "click",function(){
        $("p").css("background-color", "pink");
    });
});

*/