/* MyDoodle 
 *
 * This doodle uses the doodle library to draw its own story
 * Doodle Background: Alien family on a planet with the dad riding the space UFO to go to earth
 *
 * Create by: Rana Khalil
 */


// we start with our window onload function to load the canvas different objects in the main window

window.onload = function (){
  
	// get the canvas html tag element to draw in it
	var canvas = document.getElementById("myCanvas");
	// getting the 2d context which is our pen that we will draw everything with , very important
	var context = canvas.getContext("2d");
	//setting the doodle object that we will draw with through the doodle library
	var doodle = new Doodle(context);
	
	// Draw an arc which is our family's planet
	
	var planet = new Arc({
		color: "orange",// its an orange planet
		lineWidth: 1, // with a light lava line :)
		centerX: 630, // its x point in the center of the universe is 630 *sweet finite universe*
		centerY: 1000,// and the y point is 1000
		radius: 650, // the planet radius is 650 , small planet that fit one family
		startingTheta: Math.PI * -0.9, // the start of the planet semi circle (to get close view)
		endingTheta: Math.PI * -0.1, // here our view of the planet ends
		counterclockwise: false, // how the context would rotate to draw our planet
		fill: "#C0C0C0" // fill the color for the planet, its darker orange
	});
	
	doodle.children.push(planet); // push the planet object so the doodle object would draw the planet
	
	// Setting the container that would be the home that hold the family
	var HouseLocation = new Container({
		width: 350, // width of the house
		height: 300, // the height of the house
		left: 370, // the left position of the home on the universe (screen)
		top: 180, // the top position of the home in the universe (our screen)
		fill: "white", // the color of the house
		borderColor: "black", // the border of our house the walls
		borderWidth: 3 // the width of the walls
		
	});
	
	// drawing the door of our house as a container that would be the HouseLocation child as the door is part of the house
	var door = new Container({
		width: 100, // the width of the door inside the house container
		height: 190, // the height of the door in house container
		left: 120, // the left position of the door in the house (relative to the house container)
		top: 150, // the top position of the door in the house
		borderWidth: 5, // the width of the door
		borderColor: "white", // the color of the door width
		fill: "grey" // the color of the door is grey to fit the black color of the house
		
	});
	
	HouseLocation.children.push(door); // pushing the door to the house container to be drawn in it
	
	// this an arc that will be on the top of the door , as it will add some beauty feature for the house door to be appealing
	var doorArc = new Arc({
		color: "white", // color of the border of the arc is white
		lineWidth: 1, // the width of the ard is small 
		centerX: 170, // the center of our arc x point
		centerY: 150, // the center of our arc y point
		radius: 50, // the radius of our house arc that fits the door
		startingTheta: Math.PI, // the starting theta to draw the door arc
		endingTheta: 0,// the end of our arc
		counterclockwise: false, // the rotation direction
		fill: "grey"// the color of the arc like door grey
	});

	// add the arc to the house as it will be part of the door , which all falls inside the house
	HouseLocation.children.push(doorArc);
	
	// container to draw the windows of the house, and this is the first window through which the children images will be there
	var window1 = new Container({
	width: 60, //  house window width
	height: 60, // the height of the window
	left: 26,// the left position of the window in the house container
	top: 40, // the top position of the window in the house container
	borderWidth: 2, // the border of the window
	borderColor: "#98AFC7", // the color of the window border
	fill: "#98AFC7"	 // the color to fill the window
	});
	
	// create another container that will have the boy image that will wave to the dad through the window
	var w1_son = new Container({
	width: 160, // width of the container
	height: 200,// height of the container
	left: 0, // the container will be in the zero left position of the window container as its relatively same height and we want our image centered
	top:  3,// the top position of our image to make sure the right half of the boy shows on the window
	borderWidth: 0, // the width of the border is zero becuase the sole purpose of the container is to have the picture in
	borderColor: "black"	// this was for testing purpose to help set the right positions
	});
	w1_son.children.push(new DoodleImage({src: "Boy.png"})); // push a DoodleImage to the container
	window1.children.push(w1_son); // push the container with the image to the window
	HouseLocation.children.push(window1); // pushing the window to the house
	
	// container to draw the windows of the house, and this is the second window through which the children images will be there
	var window2 = new Container({
		width: 60, // window width
		height: 60, // window height
		left: 260, // window left position
		top: 40, // window top position
		borderWidth: 2, // window border
		borderColor: "#98AFC7", // window color
		fill: "#98AFC7" // the color of the window
	});
	// create another container that will have the girl's image that will wave to the dad through the window
	var w2_girl = new Container({
		width: 160, // container width
		height: 200, // container height
		top: 0, // the container top position
		left: 0, // the left container position
		borderWidth: 0, // No need for border width
		borderColor: "black"
	});
	w2_girl.children.push(new DoodleImage({src: "girl.png"})); // pushing the picture of the girl to the container 
	window2.children.push(w2_girl); // pushing the container with the girl image into the window
	
	HouseLocation.children.push(window2); //  pushing the window with the image into the house
	
	// this is the dimenstion object that gives the house container a depth through a path steming out of the container
	var dimension1 = new Path({
		color: "black", // the color of the dimension is black (shadow)
		lineWidth: 6, // the width of the line is 6
		type: "straight", // the type of the path is straight
		fill: "black", // its black in color
		points: [            
		{x: 785, y: 190},   // those are the points through which the dimensions are stroked and filled to give the depth
		{x: 720, y: 180},
		{x: 722, y: 180},
		{x: 723, y: 478},
		{x: 780, y: 430},
		]
	});
		
	/*
	 * This is the container that holds the UFO image and positions it on the screen
	*/
	var imgFrameUFO = new Container({
	width: 1000, //width of the UFO container
	height: 500, // height of the UFO container
	left: 550, // left position of the UFO container
	top: 200, // the top position of the UFO container
	borderWidth: 0,	 // the width of the border holding the UFO image , which is nothing
	});
	
	// pushing the DoodleImage object containing the image into the container with the set positions
	imgFrameUFO.children.push(new DoodleImage({src: "mypic.gif"}));
	
	//Another container to hold the dad's image that we will animate afterwards
	var dadImage = new Container({
		width: 390, // setting the width of the container
		height: 500, // setting the height of the container
		left: 300, // setting the left position for the container
		top: 200, // setting the top position for the container
		borderWidth: 0,
		
		
	});
	
	// pushing the DoodleImage for the dad into the container
	dadImage.children.push(new DoodleImage({src: "Dad.gif"}));
	
	// This container to hold the moon image for the planet
	var imgFrameMoon = new Container({
		width: 140,// container width
		height: 130, // container height
		left: 680, // container left position
		top: 30, // container top position
		borderWidth: 0,
	
	});
	
	//pushing the image into the container children to be drawn
	imgFrameMoon.children.push(new DoodleImage({src:"moon.png "}));
	
	// creating text to make instructions clear of how to animate the father into the UFO
	var Message = new Text({left: 150, height: 600, content: "Click to move Dad to UFO", font:"14pt Helvetica"});		
	// Pushing the message to the doodle children
	doodle.children.push(Message);
	//pushing the house container to the doodle to draw it
	doodle.children.push(HouseLocation);
	// pushing the house dimension to the doodle
	doodle.children.push(dimension1);
	// pushing the image UFO container to the doodle
	doodle.children.push(imgFrameUFO);
	// pushing the dad's frame image
	doodle.children.push(dadImage);
	//pushing the moon image container
	doodle.children.push(imgFrameMoon);
	// drawing all of the doodle container , children and their children
	doodle.draw();
	
	
	/*
	 * Summary: This function is called when the dad is clicked and it changes the position of the dad and places him in the UFO
	 * Parameters: it doesn't require any parameters
	 * Return: it doesn't return any values
	*/
	function updateDraw()
	{
		
			var dadTraveled = new Container({}); // empty container when the dad travels from his current position
			
			dadImage.left += 10; // moving the current dad container 10 pixles each time the function is called
		// Once the father container position is close where the UFO is
			if(dadImage.left >= 720)
			{
				// push another image into the imgUFO that container the father inside the ship
				imgFrameUFO.children.push(new DoodleImage({src: "DadUFO.png"}));
				// pop the current dad image from the dadImage
			    var obj = dadImage.children.pop();
			   // push the empty object to the dad container stating he traveled
				dadImage.children.push(dadTraveled);
			
			}
			
		// setting a message from the UFO family to the dad 
		var byeMessage = new Text({left: 160, height: 150, content: "Bye Dad !!", font:"40pt Helvetica"});
		//pushing the message to the doodle object
		doodle.children.push(byeMessage);
		//drawing the changes	
		doodle.draw();
		
	}
	
	/*
	* Summary : this ensure when the event of clicking happenns the function gets called then it calls the updateDraw function that updates the father container
	* within a setted interval time
	* Parameters: its doesn't require parameters the click event triggers the function to execute
	* Return: it doesn't return a certain value 
	*/
	canvas.onclick = function ()
	{
		
			//setting an interval of 30 seconds through which we update and draw the dad till it reaches the UFO
			setInterval(updateDraw, 30);
		
	}
	
}
