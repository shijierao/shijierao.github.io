$(document).ready(function(){
	// $.get("img/photography", {
	// 		dataType: "json"
	// 	}, 
	// 	function(data){
	// 		console.log(typeof(data));
	// 		console.log(data);
	// });

	$.ajax({
		url: "img/photography",
		dataType: "html",
		success: function(data){
			var listImages = ($.parseHTML(data))[5];
			// listImages.forEach(function(val){
			// 	conosle.log(val);
			// });
			console.log(listImages);
			console.log(typeof(listImages));
		}
	})
});