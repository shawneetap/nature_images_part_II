function addPhoto(event) {
	console.log(event.target);
	var photo = $(event.target).attr("src");
	$("#main-container").append($("<img>").attr("src", photo));
}

$("#images-container img").click(addPhoto);