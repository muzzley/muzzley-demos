// Global variable
var img = null,
	ctx = null,
	degrees = 0,
	intensitySteps = 0,
	radius = 80;

function clearCanvas() {
	 // clear canvas
	ctx.clearRect(0, 0, 200, 200);
}

function rotate(){
	draw();
}

function toRadians(deg) {
	return deg * Math.PI / -180
}

function drawStats(degrees, intensitySteps, sector) {
	
	// Parse when degrees value is a string
	degrees = parseFloat(degrees);

	clearCanvas();

    ctx.save();
	// Draw the compass onto the canvas
	ctx.drawImage(img, 0, 0);
   
   // Draw the red sector
    var shift = sector/2;
	
	var beginRadian = toRadians(degrees - shift);
	var endRadian = toRadians(degrees + shift);
	var intensity = radius * intensitySteps;

    ctx.fillStyle = 'rgba(200, 0 ,0 , 0.75)';

	ctx.beginPath();
	ctx.moveTo(100, 100);
    ctx.arc(100, 100, intensity, beginRadian, endRadian, true);
    ctx.lineTo(100, 100);
    ctx.closePath();
    ctx.fill();

    // Draw the circle representing the angle
    var ballRadius = 2 + (2 * intensitySteps);
    
    var ball_x = 100 + ( intensity * Math.cos(toRadians(degrees)) );
    var ball_y = 100 + ( intensity * Math.sin(toRadians(degrees)) );

    ctx.beginPath();
    ctx.arc(ball_x, ball_y, ballRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#CC0000';
    ctx.stroke();
    
	// Restore the previous drawing state
	ctx.restore();
}


function imgLoaded() {
	// Image loaded event complete.  Start the timer
	//setInterval(draw, 100);
	drawStats(0, 0, 0);
}

function init(image) {
	// Grab the compass element
	var canvas = document.getElementById('compass');

	// Canvas supported?
	if (canvas.getContext('2d')) {
		ctx = canvas.getContext('2d');

		// Load the compass image
		img = new Image();
		img.src = image;
		img.onload = imgLoaded;

	} else {
		alert("Canvas not supported!");
	}
}
