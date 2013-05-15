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

function init() {
	// Grab the compass element
	var canvas = document.getElementById('compass');

	// Canvas supported?
	if (canvas.getContext('2d')) {
		ctx = canvas.getContext('2d');

		// Load the needle image
		needle = new Image();
		needle.src = 'needle.png';

		// Load the compass image
		img = new Image();
		img.src = 'angles.png';
		img.onload = imgLoaded;

	} else {
		alert("Canvas not supported!");
	}

	
}

/*function moveIcon(letra){
	var lft = parseInt(mIcon.style.left);
	var top = parseInt(mIcon.style.top);
	
	switch(letra){
		case 'a':
			lft = lft - 10;
			break;
		case 'b':
			top = top + 10;
			break;
		case 'c':
			lft = lft + 10;
			break;
		case 'd':
			top = top - 10;
			break;
	}
	top = top;
	lft = lft;

	if(lft > (600-mIcon.width) || lft < 0 ){
		mIcon.style.left = mIcon.style.left;
	}else{
		mIcon.style.left = lft+'px';
	}
	
	if(top > (300-mIcon.height) || top < 0 ){
		mIcon.style.top = mIcon.style.top;
	}else{
		mIcon.style.top = top+'px';
	}
	
}*/