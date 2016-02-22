$(document).ready(function(){
	// var pathName = document.location.pathname.match(/[^\/]+$/);
	// console.log(pathName);
	// var currentFile = pathName ? pathName[0].split(".")[0] : "index";
	// var currentFile = document.location.pathname.match(/[^\/]+$/)[0].split(".")[0];
	// console.log(currentFile);

	// if(currentFile !== "index"){
		// $("#"+currentFile).css("font-weight","900");
	// }


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

	// console.log($(".nav").css("display"));

	// $('.nav li a').on("click", function() {
	// 	$('link[title=index]')[0].disabled=true;
	// 	var toLoad = $(this).attr('href')+' .content';
	// 	$('.content').load(toLoad);
	// });


	var hash = '';
	var current = '';
	console.log(hash);
	$('.nav li a, .logo a').click(function(){
		// $('link[title=index]')[0].disabled=true;
		var address = $(this).attr('href');
		if(address == 'index.html') {
			address = '';
		}
		window.location.hash = address;
		// toLoad = $(this).attr('href')+' .content' + ' > *';
		return false;
	});

	$(window).bind('hashchange', function() {
		hash = window.location.hash.substr(1);
		current = window.location.hash.substr(1).split(".")[0];
		console.log(hash);
		console.log(current);
		changeCss(current);
		// $('.content').load(hash + " .content > *");
		$('.content').hide('fast',loadContent);
		function loadContent() {
			$('.content').load(hash + " .content > *",'',showNewContent())
		}
		function showNewContent() {
			$('.content').show('fast');
		}
	});

});

function navHightLirght(current){
	if (obj != "index") {
		$("#"+currentFile).css("font-weight","900");
	}
}

function changeCss(current){
	if (current == ''){
		$('link[title=index]')[0].disabled=false;
	} else {
		$('link[title=index]')[0].disabled=true;
	}
};