
function startMuzzley(){

var myAppToken = 'bcda9d7c69763a98';

muzzley.on('error', function(err) {
    console.log("Log | Error: " + err);
});

muzzley.connectApp(myAppToken, function(err, activity) {
    if (err){
        console.log("Log | Connect error: " + err); 
        return //console.log("Connect error: " + err);
    } 

    // Usually you'll want to show this Activity's QR code image
    // or its id so that muzzley users can join.
    // They are in the `activity.qrCodeUrl` and `activity.activityId`
    // properties respectively.
    
   console.log('Log | Activty Created - '+activity.activityId);
    
    $('#qrCode img').attr('src', activity.qrCodeUrl);   
    console.log($('#qrCode img').attr('src'));  
    $('#qrCode').css ('visibility', 'visible'); 
    //$('#qrCode').attr('style.visibility', 'visible');  

    activity.on('participantJoin', function(participant) {
        console.log('Log | Participant Join - id:' + participant.id + ' name: ' + participant.name);
        $('#qrCode').css ('visibility', 'hidden');
        // A participant joined. Tell him to transform into a gamepad.
        participant.changeWidget("drawpad",{sampling: (1/60), decay:0}, function (err) {
            if (err){
                console.log('Log | Change Widget Error: ' + err);
                return //console.log('changeWidget error: ' + err );
            } else{
                console.log('Log | Widget Changed to Drawpad');
            }
        });


        participant.on('action', function (action) {
            // The action object represents the participant's interaction.
           
            console.log('Log | ' +JSON.stringify(action));

            if(action.v){
                //Draw on canvas the points that the participant sent. 
                //The x and y values was on the action.v object (action.v.x, action.v.y)
                 var x = Math.round( gameWidth * (action.v.x));
                 var y = Math.round( gameHeight *(action.v.y));  
                 //console.log(gameWidth+" "+gameHeight);                
                 if(action.c == "touch"){
                      if(action.e == "touchBegin"){
                          //topCanvas.addEventListener('mousemove', mousemove, false);
                          $(topCanvas).mousemove(function(e){
                            mousemove(e);
                          });
                      }else if(action.e == "touchMove"){
                        
                          //muzzInteraction(x, y);
                          $(function() {
                              e = $.Event('mousemove');
                              e.layerX = e.offsetX =  x; 
                              e.layerY = e.offsetY = y;
                              e.userCapture = false;
                              $(topCanvas).trigger(e);
                        });
                      }else{
                          //topCanvas.removeEventListener('mousemove', mousemove, false);
                      }
                  }          
            }
            if(action.c == "clean"){
              if(gameState == GAME_OVER){
                  muzzClean();
              }
                 
            } 
        });

        participant.on('quit', function (action) {
            // You can also check for participant quit events
            // directly in each participant object
            console.log('Log | Participant Quit - id:' + participant.id);
            gameOver(true);
            
        });

    });
});



}
