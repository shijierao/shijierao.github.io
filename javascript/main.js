$(document).ready(function(){
	var pathName = document.location.pathname.match(/[^\/]+$/);
	console.log(pathName);
	var currentFile = pathName ? pathName[0].split(".")[0] : "index";
	// var currentFile = document.location.pathname.match(/[^\/]+$/)[0].split(".")[0];
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

	// $("#about").on("click", function() {
	// 	console.log("haha");
	// 	$.get("resume.html", function(data){
	// 		$.html(data).show("slow");
	// 	});
	// });


	// $('.nav li a').click(function(){
	// 	var toLoad = $(this).attr('href')+' .content';
	// 	$('.content').hide('fast',loadContent);
	// 	window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
	// 	function loadContent() {
	// 		$('.content').load(toLoad,'',showNewContent())
	// 	}
	// 	function showNewContent() {
	// 		$('.content').show('normal');
	// 	}
	// 	return false;
		
	// });

});