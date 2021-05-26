# sbbUhr
A java script version of the famous SBB Clock for digital usage. 
## Initialisation
In your html header add `<script src="path/to/sbbUhr-1.3.js"></script>`

In the html body define a `<div></div>` Tag with a unique id where the clock will be hosted. 

In a seperate script create a new clock `var myClock = new sbbUhr(container, background, fps);`

`container (string)` is the id of the defined div container, where the clock will be hosted. 

optional `background (boolean)` true = clock will be placed on a dark background, false = clock will be placed on a white background. 

optional `fps` set the refreshrate of the clock. Must be higher than 10 frames/second to get a smooth pointer movement. If not set, the clock will be rendered with every frame.

## Methods
`myClock.start()` will start the clock. 

`myClock.stop()` will stop the clock. 
