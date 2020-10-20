$(document).ready(function() {
    $(".gallery").hide();
    
    //shows gallery when button is clicked - only got part way through this before time ran out!
    $("button").click(function(){
		$(".gallery").toggle("slow");
	});
});