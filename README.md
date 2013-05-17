# Muzzley Demos

These demos were developed in javascript and serve for you to understand what `muzzley` have for you.
They all are available for you interact on muzzley site [http://muzzley.com](http://muzzley.com), on  widgets documentation page: [http://www.muzzley.com/documentation/widgets.html](http://www.muzzley.com/documentation/widgets.html) .

First you have to download the muzzley application from [http://www.muzzley.com](http://www.muzzley.com) to your smartphone, and  download this demos for your computer.
After choose a demo, open a html file on your browser. This file represents a browser application that implements muzzley protocol. 

![](https://github.com/muzzley/muzzley-demos/blob/master/assets/screen1.png?raw=true)

You have to have internet to see the demos working. If the connection was established a QR-Code image will appear. 
This means that the demo connected with the muzzley server and a activity has been successfully created. The activity represents an instance of your application that is running on the muzzley server, represented by a unique activity id or muzzley QR-Code.
Take a look on the text box below, she has a log and will help you to follow what's happen in the code.

![](https://github.com/muzzley/muzzley-demos/blob/master/assets/log.png?raw=true)

Scan the QR-Code with your muzzley application to pair your phone with the browser app. When the phone  is successfully paired with the app, he becomes a participant in the activity.
From here, what you'll see depends on which widget demo refers.

You have 5 demos available, which are the 5 widgets that muzzley has to offer you.

## Drawpad

[http://www.muzzley.com/documentation/widgets/drawpad.html](http://www.muzzley.com/documentation/widgets/drawpad.html)

![](https://github.com/muzzley/muzzley-demos/blob/master/assets/drawpad.png?raw=true)

With Drawpad demo you can draw on your phone what you want and see on your app. 

## Gamepad

[http://www.muzzley.com/documentation/widgets/drawpad.html](http://www.muzzley.com/documentation/widgets/gamepad.html)

![](https://github.com/muzzley/muzzley-demos/blob/master/assets/gamepad.png?raw=true)

With Gamepad demo you can control the arrow according the angle returned  by joystick, and change the position of the muzzley icon with the A, B, C and D keys.

## Keyboard

[http://www.muzzley.com/documentation/widgets/keyboard.html](http://www.muzzley.com/documentation/widgets/keyboard.html)

![](https://github.com/muzzley/muzzley-demos/blob/master/assets/keyboard.png?raw=true)

With Keyboard demo you can write on your phone what you want and see on your app.

## SwipeNavigator

[http://www.muzzley.com/documentation/widgets/swipe-navigator.html](http://www.muzzley.com/documentation/widgets/swipe-navigator.html)

![](https://github.com/muzzley/muzzley-demos/blob/master/assets/swipe.png?raw=true)

With SwipeNavigator demo you can swipe on a photo gallery.

## Switch

[http://www.muzzley.com/documentation/widgets/switch.html](http://www.muzzley.com/documentation/widgets/switch.html)

![](https://github.com/muzzley/muzzley-demos/blob/master/assets/switch.png?raw=true)

With Switch demo you can control the lamp state.

<br>

This demos are controlled for the json messages that comes from muzzley server.
Witch demo app receive messages from muzzley server and from participant, but all the messages pass across the muzzley server.


If you pass the mouse over the log text area, you can see the json action message formatted. 
This functionality only be available on ACTION messages, which are messages sent by the participant each time you do a action on your widget.

![](https://github.com/muzzley/muzzley-demos/blob/master/assets/onMouseOver.png?raw=true)