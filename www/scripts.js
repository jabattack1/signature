

$(document).ready(function() {
	$("#test").jqScribble();
});




function save(){			
	var canvas = $('#test');
	var link = document.createElement('a');

	link.setAttribute("id", "file");
    link.innerHTML = 'download image';
	link.addEventListener('click', function(ev) {		
    link.href = canvas[0].toDataURL();
    link.download = "mypainting.png";
	}, false);

	document.body.appendChild(link);
	$('#file').get(0).click();
}



function addImage(){
	var img = prompt("Enter the URL of the image.");
	if(img !== '')$("#test").data("jqScribble").update({backgroundImage: img});
}
