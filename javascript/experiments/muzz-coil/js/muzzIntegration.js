
function startMuzzley(){

    var myAppToken = 'bcda9d7c69763a98';
    //console.log(DEFAULT_WIDTH+" "+DEFAULT_HEIGHT);

    muzzley.on('error', function(err) {
        //console.log("Log | Error: " + err);
    });

    muzzley.connectApp(myAppToken, function(err, activity) {
        if (err){
            //console.log("Log | Connect error: " + err); 
            return //console.log("Connect error: " + err);
        } 

        // Usually you'll want to show this Activity's QR code image
        // or its id so that muzzley users can join.
        // They are in the `activity.qrCodeUrl` and `activity.activityId`
        // properties respectively.
        
       //console.log('Log | Activty Created - '+activity.activityId);
        
        $('#qrCode img').attr('src', activity.qrCodeUrl);  
        $('#qrCode').css ('visibility', 'visible'); 

        activity.on('participantJoin', function(participant) {
            //console.log('Log | Participant Join - id:' + participant.id + ' name: ' + participant.name);
            // A participant joined. Tell him to transform into a gamepad.
            participant.changeWidget("drawpad",{sampling: (1/60), decay:0}, function (err) {
                if (err){
                    //console.log('Log | Change Widget Error: ' + err);
                    return //console.log('changeWidget error: ' + err );
                } else{
                    //console.log('Log | Widget Changed to Drawpad');
                }
            });
            start();
           $(document).bind("muzzmove", function(e){
                onDocumentMouseMoveHandler(e);
           });
           $(document).bind("muzzdown", function(e){
                onDocumentMouseDownHandler();
           });
            $(document).bind("muzzup", function(e){
                onDocumentMouseUpHandler();
           });
            participant.on('action', function (action) {
                // The action object represents the participant's interaction.
               
                //console.log('Log | ' +JSON.stringify(action));

                if(action.v){
                    //Draw on canvas the points that the participant sent. 
                    //The x and y values was on the action.v object (action.v.x, action.v.y)
                     
                     var x = Math.round( DEFAULT_WIDTH * (action.v.x));
                     var y = Math.round( DEFAULT_HEIGHT * (action.v.y));

                     if(action.c == "touch"){
                          
                          if(action.e == "touchBegin"){
                              //topCanvas.addEventListener('mousemove', mousemove, false);
                              if(playing == false){
                                  start();
                              }
                              $(function() {
                                    e = $.Event('muzzdown');
                                    e.userCapture = false;
                                    $(document).trigger(e);
                              });
                          }else if(action.e == "touchMove"){
                              $(function() {
                                    e = $.Event('muzzmove');
                                    e.clientX = x; 
                                    e.clientY = y;
                                    e.userCapture = false;
                                    $(document).trigger(e);
                              });
                             

                          }else if(action.e == "touchEnd"){
                               $(function() {
                                    e = $.Event('muzzup');
                                    e.clientX = x; 
                                    e.clientY = y;
                                    e.userCapture = false;
                                    $(document).trigger(e);
                              });
                              
                              //topCanvas.removeEventListener('mousemove', mousemove, false);
                          }
                      }          
                }
            });

            participant.on('quit', function (action) {
                // You can also check for participant quit events
                // directly in each participant object
                //console.log('Log | Participant Quit - id:' + participant.id);
                $("#qrCode #start").text("Scan the QR code to start again");
                stop();           
            });

        });
    });


}