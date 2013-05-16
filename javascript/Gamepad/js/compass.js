// Global variable
var img = null,
	needle = null,
	ctx = null,
	degrees = 0;

function clearCanvas() {
	 // clear canvas
	ctx.clearRect(0, 0, 200, 200);
}

function rotate(){
	if(degrees == 0){
		degrees = 90;
	}else if (degrees == 90) {
		degrees = 0;
	}else if (degrees == 135) {
		degrees = 315;
	}else if (degrees == 180) {
		degrees = 270;
	}else if (degrees == 270) {
		degrees = 180;
	}else if (degrees == 315) {
		degrees = 135;
	}
	draw();
}

function draw() {
	
	clearCanvas();

	// Draw the compass onto the canvas
	ctx.drawImage(img, 0, 0);

	// Save the current drawing state
	ctx.save();

	// Now move across and down half the 
	ctx.translate(100, 100);

	// Rotate around this point

	ctx.rotate(degrees * (Math.PI / 180));
	//alert(degrees + newDegrees);

	// Draw the image back and up
	ctx.drawImage(needle, -100, -100);

	// Restore the previous drawing state
	ctx.restore();

}


function imgLoaded() {
	// Image loaded event complete.  Start the timer
	//setInterval(draw, 100);
	draw();
}

function init(image1, image2) {
	// Grab the compass element
	var canvas = document.getElementById('compass');

	// Canvas supported?
	if (canvas.getContext('2d')) {
		ctx = canvas.getContext('2d');

		// Load the needle image
		needle = new Image();
		needle.src = image1;

		// Load the compass image
		img = new Image();
		img.src = image2;
		img.onload = imgLoaded;

	} else {
		alert("Canvas not supported!");
	}

	
}
