# Muzzley Demos

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

[http://www.muzzley.com/documentation/widgets/drawpad.html](http://www.muzzley.com/documentation/widgets/gamepad.html)

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