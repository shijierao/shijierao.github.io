$(document).ready(function(){
	var currentFile = document.location.pathname.match(/[^\/]+$/)[0].split(".")[0];
	console.log(currentFile);
	if(currentFile !== "index"){
		$("#"+currentFile).css("font-weight","900");	
	}

	$("#down").on("click", function(){
		console.log("click");
		$(".nav").slideDown();
		$("#down").fadeToggle("fast");
		$("#up").css("display","block");
	});

	$("#up").on("click", function(){
		console.log("click");
		$(".nav").slideUp();
		$("#up").fadeToggle("fast");
		$("#down").css("display","block");
	});

	console.log($(".nav").css("display"));

});