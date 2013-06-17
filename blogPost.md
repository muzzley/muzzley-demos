# Blog Post

Check this simple demos that illustrate some examples of what you can do with muzzley. Is so simple to integrate muzzley, and see on action. 

5 minutes to integrate:

    <script src="http://cdn.geo.muzzley.com/libraries/js/muzzley-client-0.3.0.min.js"></script>
    <img id="qrCodeContainer">
    <script>
      var myAppToken = 'bcda9d7c69763a98';
      muzzley.on('error', function (err) {
      console.log("Error: " + err);
      });
    
      muzzley.connectApp(myAppToken, function (err, activity) {
       if (err) return console.log("Connect error: " + err);
    
      console.log(activity);
      document.getElementById('qrCodeContainer').src = activity.qrCodeUrl;
    
      activity.on('participantQuit', function (participant) {
      // A participant quit
      });
    
      activity.on('participantJoin', function (participant) {
    
      // A participant joined. Tell him to transform into a gamepad.
      participant.changeWidget('gamepad', function (err) {
       if (err) return console.log('changeWidget error: ' + err );
      });
    
      participant.on('action', function (action) {
       // The action object represents the participant's interaction.
       // In this case it might be "button 'a' was pressed".
       console.log(action);
      });
    
      participant.on('quit', function () {
       // You can also check for participant quit events
       // directly in each participant object.
      });
    
    });
     });
      </script>

With these code lines you have muzzley integrate and ready to use. 
You can choose one of the available widgets to use one your application, and you can also activate a component with your widget.

The available widgets are on. widgets documentation of the muzzley site [http://www.muzzley.com/documentation/widgets.html](http://www.muzzley.com/documentation/widgets.html)

On witch widget page you have a section call `Try it here` and you will see a qr-code. This is the widget demo, you have to scan the qr-code with the muzzley app from your phone to start the demo. If you don't have the muzzley app, you can download it at [https://itunes.apple.com/us/app/muzzley/id604133373](https://itunes.apple.com/us/app/muzzley/id604133373 "IOS") or [https://play.google.com/store/apps/details?id=com.muzzley](https://play.google.com/store/apps/details?id=com.muzzley "Android").



In these JavaScript demos we try to show you some examples of what's possible with `muzzley`. All these demos can be tested at [http://muzzley.com](http://muzzley.com), more specifically at the widgets documentation pages: [http://www.muzzley.com/documentation/widgets.html](http://www.muzzley.com/documentation/widgets.html).

To interact with the demos, first you have to download the muzzley application to your smartphone. At [http://www.muzzley.com](http://www.muzzley.com) you have the links to the supported platforms (iOS and Android). Then download these demos to your computer, choose a demo and open the specific HTML file in your browser. This file represents a browser application that is _muzzley-enabled_.

![](https://github.com/muzzley/muzzley-demos/blob/master/assets/screen1.png?raw=true)

A few moments after opening a demo, a QR code image should appear. This means that the demo connected to the muzzley servers and an _activity_ has been successfully created. The activity represents an instance of the _muzzley-enabled_ application, represented by a unique activity id or muzzley QR code.

Take a look at the text box at the bottom of the demos, it has a log and will help you follow what's happening in the code.

![](https://github.com/muzzley/muzzley-demos/blob/master/assets/log.png?raw=true)

If you hover your mouse over the log text area of a demo, you can see the JSON action messages formatted. This feature is only available for action messages, which are messages sent by the participant each time you perform an action in a widget.

![](https://github.com/muzzley/muzzley-demos/blob/master/assets/onMouseOver.png?raw=true)

Scan the QR code with your muzzley application to pair your phone with the browser app. When the phone is successfully paired with the app, it becomes a participant of the activity.

From this point onwards, what each demo shows depends on the widget it's demonstrating.

We have a few demos available, one for each widget muzzley provides.

## Drawpad

[http://www.muzzley.com/documentation/widgets/drawpad.html](http://www.muzzley.com/documentation/widgets/drawpad.html)

![](https://github.com/muzzley/muzzley-demos/blob/master/assets/drawpad.png?raw=true)

In the Drawpad demo you can draw on your phone and see the result it in your app.

## Gamepad

[http://www.muzzley.com/documentation/widgets/gamepad.html](http://www.muzzley.com/documentation/widgets/gamepad.html)

![](https://github.com/muzzley/muzzley-demos/blob/master/assets/gamepad.png?raw=true)

The Gamepad demo allows you to control an arrow according to the angle that is returned by the gamepad's analog joystick, and change the position of the muzzley logo with the A, B, C and D buttons.

## Keyboard

[http://www.muzzley.com/documentation/widgets/keyboard.html](http://www.muzzley.com/documentation/widgets/keyboard.html)

![](https://github.com/muzzley/muzzley-demos/blob/master/assets/keyboard.png?raw=true)

The Keyboard demo shows how to use muzzley as a remote virtual keyboard.

## Swipe Navigator

[http://www.muzzley.com/documentation/widgets/swipe-navigator.html](http://www.muzzley.com/documentation/widgets/swipe-navigator.html)

![](https://github.com/muzzley/muzzley-demos/blob/master/assets/swipe.png?raw=true)

With the Swipe Navigator demo you can swipe on your phone to navigate a picutre gallery on your computer.

## Switch

[http://www.muzzley.com/documentation/widgets/switch.html](http://www.muzzley.com/documentation/widgets/switch.html)

![](https://github.com/muzzley/muzzley-demos/blob/master/assets/switch.png?raw=true)

The Switch demo allows you to switch a virtual lamp on and off.

----

All these demos use the muzzley cloud for the communication between the smartphone and the browser that runs them. There's no need to have both endpoints connected to the same Wi-Fi network.