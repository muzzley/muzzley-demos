

    var myAppToken = 'bcda9d7c69763a98';
    var muzzley;
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
             // A participant joined. Tell him to transform into a gamepad.
            participant.changeWidget("gamepad", function (err) {
                if (err){
                    return //console.log('changeWidget error: ' + err );
                }else{
                     //console.log('Log | Widget Changed to Gamepad');
                }
            });

            participant.on('action', function (action) {
                // The action object represents the participant's interaction.
                // In this case it might be "button 'a' was pressed".
                //console.log(JSON.stringify(action));
                if(action.v){
                    
                    var value = action.v;
                    var status = action.e;
                    var type = action.c;

                    if(status == 'press'){
                      if((value >= 0 && value <= 360) || type == 'jl'){
                         if(value == 0){
                            keyRight=true;
                         }else if(value == 180){
                            keyLeft=true;
                         }
                      }
                      if(value == 'd'){
                          keyFaster = true;
                      }else if(value == 'b'){
                          keySlower = true;
                      }
                    }else if(status == 'release'){
                        if(type == 'jl'){
                            keyLeft = keyRight = false;
                        }else {
                          if(value == 'd'){
                              keyFaster = false;
                          }else if(value == 'b'){
                              keySlower = false;
                          }
                        }
                    }

                    
                    
                }
            });

            participant.on('quit', function (action) {
                // You can also check for participant quit events
                // directly in each participant object
                //console.log('Log | Participant Quit - id:' + participant.id);
                $("#qrCode #start").text("Scan the QR code to start again");
                           
            });

        });
    });
