window.phone = {
    rollDireita: function(){},
    rollEsquerda: function(){},
    rollNone: function(){}
  };

muzzley.on('error', function(err){
  console.log(err.toString());
});

muzzley.connectApp('b455f7c8521672d8', function(err, activity){

  if (err) return console.log("err: " + err );
  var qrCodeImg = document.getElementById('qrCodeImg');

  qrCodeImg.src = activity.qrCodeUrl ;

  console.log('##Activity: activityCreated');
  console.log(activity);
  activity.on('participantQuit', function(participant){
    console.log('##Activity: "EVENT" participantQuit');
  });

  activity.on('participantJoin', function(participant){
    qrCodeImg.style.display = "none";
    document.getElementById('instructions').style.display = 'block';
    console.log('##Activity: participantJoined');
    console.log('##Activity: sending changeWidget');
    var gamePad = {
      widget: "webview", 
      params: {
        uuid: 'f5d5c43b-00cc-4aaa-b46c-0308103b9e57',
        orientation: 'portrait'
      },
      components: [
        {
          c: 'deviceMotion',
          p: {
            step: 2,
            roll: true
          },
          a: 'enable'
        }
      ]
    };
    participant.changeWidget(gamePad, function (err) {
      if (err) return console.log("err: " + err );
      console.log('##Activity: recived changeWidget okay');

      participant.on('quit', function (action) {
        qrCodeImg.style.display = "block";
        // Action object represents the participants interaction
        console.log('quit');
        //console.log(action);
      });

      participant.on('signalingMessage', function(type, message, cb) {
          console.log(type + " -- " + JSON.stringify(message));
          if(type === 'start'){
            init();
          }else if(type === 'restart'){
            reset();
          }
      })


      var roll = 0;
      var oldRoll=0;

      participant.on('action', function (action) {
        // Action object represents the participants interaction

        roll = action.v.roll;

        if(roll>5 && roll<175){
          /*if(roll > oldRoll){
            window.phone.rollDireita();
          }else{
            window.phone.rollEsquerda();
          }*/
          window.phone.rollDireita();
        }else if(roll>275 && roll<355){
          /*if(roll > oldRoll){
            window.phone.rollEsquerda();
          }else{
            window.phone.rollDireita();
          }*/
          window.phone.rollEsquerda();
        }
        
        oldRoll = roll;

        //console.log(roll);
        /*
        if (roll > 0 && roll <= 45){
          //console.log('direita slow');
          window.phone.rollDireita();
        }

        if (roll > 45 && roll <= 90){
          //console.log('direita rapido');
          //window.phone.rollDireita();
        }

        if (roll > 330 && roll <= 345){
          //console.log('esquerda slow');
          window.phone.rollEsquerda();
        }

        if (roll > 250 && roll <= 330){
          //console.log('esquerda rapido');
          //window.phone.rollEsquerda();
        }*/

        if (roll > 345 || roll < 10  || roll === 0 ){
          //console.log('none');
          window.phone.rollNone();
        }
        
        //rodar para a esquerda:
        //Roll 345
        //até 270
        
        //rodar para a direita 
        //15
        //até 90


      });

      window.muzz.restart = function restart(){
          participant.sendSignal('menu');
      }
    
    });
  });
});