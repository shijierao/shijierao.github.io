$(document).ready(function(){
	var currentFile = document.location.pathname.match(/[^\/]+$/)[0].split(".")[0];
	console.log(currentFile);
	if(currentFile !== "index"){
		$("#"+currentFile).css("font-weight","900");	
	}
});