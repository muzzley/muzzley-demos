window.onload=loadAssets;

function loadAssets()
{
  

	assetsManager=new FruitGame.AssetsManager();
	assetsManager.addEventListener("complete",init);
	assetsManager.start();
};
function init()
{
	document.getElementById("loading").style.display='none';
	//document.getElementById("info").style.display='block';

	//canvas
	topCanvas=document.getElementById("top");
	topCanvas.style.display="block";
	topCanvas.width=gameWidth;
	topCanvas.height=gameHeight;
	topContext=topCanvas.getContext("2d");
	topContext.globalCompositeOperation = "lighter";
	
	
	middleCanvas=document.getElementById("middle");
	middleCanvas.style.display="block";
	middleCanvas.width=gameWidth;
	middleCanvas.height=gameHeight;
	middleContext=middleCanvas.getContext("2d");
	
	bottomCanvas=document.getElementById("bottom");
	bottomCanvas.style.display="block";
	bottomCanvas.style.dispaly="none";
	bottomCanvas.width=gameWidth;
	bottomCanvas.height=gameHeight;
	bottomContext=bottomCanvas.getContext("2d");
	bottomContext.fillStyle="#ba0a1d";
	bottomContext.textAlign="left";
	bottomContext.textBaseline="top";
	
	//particle system
	particleSystem = new SPP.ParticleSystem();
	bladeSystem=new SPP.ParticleSystem();
	fruitSystem=new SPP.ParticleSystem();
	bombSystem=new SPP.ParticleSystem();
	gravity = new SPP.Gravity();
	gravity.init(0.15);
	
	//data 
	storage = window.localStorage;
	if(!storage.highScore)
	storage.highScore=0;
	gameState=GAME_READY;
	score=0;
	gameLife=3;
	ui_gamelifeTexture=assetsManager["gamelife-3"];
	gameLevel=0.1;
	
	
	particleSystem.start();
	bladeSystem.start();
	fruitSystem.start();
	bombSystem.start();
	render();

  //remove mousemove listener, muzzley will dispatch this event
	//topCanvas.addEventListener('mousemove', mousemove, false);
	
  // start muzzley connection
  startMuzzley();

	enterGame();
	
};


function enterGame()
{
	showStartGameUI();
};

function resetGameData()
{
	gameState=GAME_READY;
	score=0;
	gameLife=3;
	ui_gamelifeTexture=assetsManager["gamelife-3"];
	gameLevel=0.1;
}
function startGame(e)
{
	hideStartGameUI();

	$('#info').css ('visibility', 'hidden');
	resetGameData();
	showScoreUI();
	gameState=GAME_PLAYING;
	
}
function renderTimer()
{
	if(gameState!=GAME_PLAYING)return;
	timer+=SPP.frameTime;
	if(timer>=interval)
	{
		timer=0;
		throwObject();	
	}
};
function throwObject()
{
    var n=(Math.random()*4>>0)+1;
    for(var i=0;i<n;i++)
    {
    	if(isThrowBomb())throwBomb();
        else throwFruit();
    };
   //createjs.Sound.play("throwFruit");
}
function isThrowBomb()
{
	var n=Math.random();
	if(n<gameLevel)return true;
	return false;
};
function levelUpdate()
{
	gameLevel+=levelStep;
	if(gameLevel>1)
	{
		gameLevel=0.1;
	}
};

var startAgain;

function gameOver(value)
{
  //     add to muzzley integration    //  
	startAgain = value;
	
	if(gameState==GAME_OVER)return;
	var l = fruitSystem.getParticles().length;
	
	while (l-- > 0)
	{
		fruitSystem.getParticles()[l].removeEventListener("dead",missHandler);
	}
	gameState=GAME_OVER;
	gameLife=0;
	ui_gamelifeTexture=assetsManager["gamelife-"+gameLife];
	ui_gameLife.texture=ui_gamelifeTexture;
	if(score>parseInt(storage["highScore"]))storage.highScore=score;
	console.log("akii 1");
	showGameoverUI();
};

function gameOverComplete()
{
	//topCanvas.addEventListener('click', replay, false);
	
  //     add to muzzley integration    //  
	if(startAgain){
			replay();
	}
};

function replay()
{
	//topCanvas.removeEventListener('click', replay, false);
	hideGameoverUI();

 
  $('#info').css ('visibility', 'visible');

 //     add to muzzley integration    //  
	if(startAgain){
		$('#qrCode').css ('visibility', 'visible');
	}
	startAgain=false;
};

//     add to muzzley integration    //  
function muzzClean(){
	if(gameState==GAME_OVER){
		replay();
	}
}

//mouse event
function mousemove(e) {

	setPositions(e.layerX, e.layerY);
	// Get the mouse position relative to the canvas element.
	//console.log(e.layerX+" "+e.layerY);
	/*if (e.layerX || e.layerX == 0)
	{
		// Firefox
		mouse.x = e.layerX;
		mouse.y = e.layerY;
	} else if (e.offsetX || e.offsetX == 0)
	{ // Opera
		mouse.x = e.offsetX;
		mouse.y = e.offsetY;
	};
	buildBladeParticle(mouse.x, mouse.y);*/
};

function setPositions(x, y){
	if(x || x == 0){
			mouse.x = e.offsetX;
			mouse.y = e.offsetY;
	}
	buildBladeParticle(mouse.x, mouse.y);
}

//render canvas
function render() 
{
	requestAnimationFrame(render);
	topContext.clearRect(0,0,gameWidth,gameHeight);
	middleContext.clearRect(0,0,gameWidth,gameHeight);
	bottomContext.clearRect(0,0,gameWidth,gameHeight);

	showScoreTextUI();
	fruitSystem.render();
	bombSystem.render();
	particleSystem.render();
	bladeSystem.render();
	
	buildColorBlade(bladeColor,bladeWidth);
	collideTest();
	levelUpdate();
	renderTimer();
};
