    var myAppToken = '3e19160d07af24e1';
    var lastPos=0;
    muzzley.on('error', function(err) {
      console.log(err.toString());
    });

    muzzley.connectApp(myAppToken, function(err, activity) {
      if (err) return console.log("err: " + err);

      console.log("Created activity: "+JSON.stringify(activity));
      document.getElementById("qr_code").src = activity.qrCodeUrl;
      document.getElementById("qr_code").style.width = document.getElementById("qr_code").style.height = 200+'px';

      document.getElementById("qr_code").style.left = ((document.body.clientWidth/2) - (200/2))+'px';
    
      activity.on('participantQuit', function(participant) {
        document.getElementById("qr_code").style.display='';
      });

      activity.on('participantJoin', function(participant) {
        document.getElementById("qr_code").style.display='none';
   
       participant.changeWidget('gamepad', function (err) {
          if (err) return console.log("err: " + err );

          participant.on('quit', function (action) {
            // You can also checko for participant quit events
            // directly in each participant object.
            document.getElementById("qr_code").style.display='';

          });

          participant.on('action', function (action) {
            // Action object represents the participants interaction
            // In this case it might be "button a was pressed".
            if(action.c == 'jl' && action.v==0 && action.e=='press'){
              if(lastPos != 0) keyUp(lastPos);
              lastPos = 39;
              keyDown(39);
            }

            if(action.c == 'jl' && action.v==-1 && action.e=='release'){
              if(lastPos == 39){ keyUp(39); }
              if(lastPos == 37){ keyUp(37); }
              lastPos = 0;
            }

            if(action.c == 'jl' && action.v==180 && action.e=='press'){
               if(lastPos != 0) keyUp(lastPos);
               lastPos = 37;
               keyDown(37);
            }
              
            if(action.c == 'jl' && action.v==90 && action.e=='press'){ }
            if(action.c == 'jl' && action.v==270 && action.e=='press'){ }
            if(action.c == 'ba' && action.v=='a' && action.e=='press'){ keyDown(83) }
            if(action.c == 'ba' && action.v=='a' && action.e=='release'){ keyUp(83); }
            if(action.c == 'bb' && action.v=='b' && action.e=='press'){ keyDown(65); }
            if(action.c == 'bb' && action.v=='b' && action.e=='release'){ keyUp(65); }
            if(action.c == 'bc' && action.v=='c' && action.e=='press'){  keyDown(13); }
            if(action.c == 'bc' && action.v=='c' && action.e=='release'){ keyUp(13); }

          });
        });
      });
    });