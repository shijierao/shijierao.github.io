$(document).ready(function(){

	var pathName = document.location.pathname.match(/[^\/]+$/);
	console.log(pathName);
	var currentFile = pathName ? pathName[0].split(".")[0] : "index";
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

	// console.log($(".nav").css("display"));

	// $('.nav li a').on("click", function() {
	// 	$('link[title=index]')[0].disabled=true;
	// 	var toLoad = $(this).attr('href')+' .content';
	// 	$('.content').load(toLoad);
	// });


	// var hash = '';
	// var current = '';
	// var previous = '';
	// console.log(hash);
	// $('.nav li a, .logo a').click(function(){
	// 	previous = window.location.hash.substr(1).split(".")[0];
	// 	window.location.hash = $(this).attr('href');
	// 	return false;
	// });

	// $(window).bind('hashchange', function() {
	// 	hash = window.location.hash.substr(1);
	// 	current = window.location.hash.substr(1).split(".")[0];
	// 	navHightLirght(previous, current);
	// 	console.log(hash);
	// 	console.log(previous);
	// 	console.log(current);
	// 	$('.content').fadeOut("fast", loadContent);
	// 	function loadContent() {
	// 		changeCss(previous, current);
	// 		$('.content').load(hash + " .content > *",'',showNewContent())
	// 	}
	// 	function showNewContent() {
	// 		$('.content').fadeIn('fast');
	// 	}
	// });

});

// function navHightLirght(previous, current){
// 	if ($("#"+current).length == 1) {
// 		$("#"+current).css("font-weight","900");
// 	}
// 	if ($("#"+previous).length == 1) {
// 		$("#"+previous).css("font-weight","700");
// 	}
// }

// function changeCss(previous, current){
// 	if ((previous == '')||(previous == 'index')){
// 		$('link[title=index]')[0].disabled=true;
// 	} else if ($('link[title='+previous+']').length != 0){
// 		$('link[title='+previous+']')[0].disabled=true;
// 	}
// 	if ((current == '')||(current == 'index')){
// 		$('link[title=index]')[0].disabled=false;
// 	}
// 	if ($('link[title='+current+']').length != 0){
// 		$('link[title='+current+']')[0].disabled=false;	
// 	}

// };