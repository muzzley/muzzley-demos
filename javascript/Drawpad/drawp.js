
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function draw(obj){
	var x = Math.round(canvasWidth*(obj.v.x));
	var y = Math.round(canvasHeight*(obj.v.y));  
	//console.log(x+" x "+y);
	if(obj.e=="touchBegin"){      
		         
		//console.log(mouseX+" x "+mouseY);
		paint = true;
		addClick(x , y );
		redraw();
    }else if(obj.e=="touchMove"){
       if(paint){
			addClick(x , y, true);
			redraw();
	 	}
    }else if(obj.e=="touchEnd"){
      	paint = false;
    }
}

/**
* Adds a point to the drawing array.
* @param x
* @param y
* @param dragging
*/
function addClick(x, y, dragging)
{
	clickX.push(x);
	clickY.push(y);
	clickDrag.push(dragging);
}

/**
* Redraws the canvas.
*/
function redraw(){
	canvas.width = canvas.width; // Clears the canvas
	
	context.strokeStyle = "#e10d24";
	context.lineJoin = "round";
	context.lineWidth = 5;
			
	for(var i=0; i < clickX.length; i++)
	{   
		context.beginPath();
		if(clickDrag[i] && i){
			context.moveTo(clickX[i-1], clickY[i-1]);
		 }else{
			 context.moveTo(clickX[i]-1, clickY[i]);
		 }
		 context.lineTo(clickX[i], clickY[i]);
		 context.closePath();
		 context.stroke();
	}
}

/**
* Clears the canvas.
*/
function clearCanvas()
{
	context.fillStyle = '#ffffff'; // Work around for Chrome
	context.fillRect(0, 0, canvasWidth, canvasHeight); // Fill in the canvas with white
	canvas.width = canvas.width; // clears the canvas 
}