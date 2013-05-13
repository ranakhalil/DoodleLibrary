/* Doodle Drawing Library
*
* Drawable and Primitive are base classes and have been implemented for you.
* Do not modify them! 
*
* Stubs have been added to indicate where you need to complete the
* implementation.
*/

/*
* Summary : Root container for all drawable elements
* Parameters: the context which acts like the pen to draw the different containers and shapes
* Return: It doesn't return any values
*/
function Doodle (context) {
  this.context = context;
	this.children = [];
}
/*
*  Summary : Doodle draw function is the manager ... that calls and manages all those people and tells them
*  where to draw them selves and in which rotation
*  Parameters: It doesn't take any parameters but it inherets the context (pen) and the children array
* to add the objects of shapes to be drawn
*/
Doodle.prototype.draw = function() {

	// this loop is mainly for getting each doodle item pushed in the doodle children arary to draw 
	// each one of them through the order they have been pushed in the array
	for(var i = 0; i < this.children.length ; i++) // it loops according to the length of the children
	{											  // array to access each child index.

		this.context.save(); // first we save the current location of our pen before starting to move and draw
		this.context.translate(this.children[i].left, this.children[i].top); // we set our pen position on the desired place 
		//to draw our object through its left and top positions which will tell up about its x and y 
		//coordinates

		this.context.rotate(this.children[i].theta); // We then set the orientation or our child and if we like to rotate our axis to have our child orientation
		//within specific angle

		this.children[i].draw(this.context); // then we call our doodle draw function to draw the current child after setting its position
		this.context.restore(); // then we restore the position we saved in the begining to start drawing the next child relative to the original position
		// and not relative to the position of the las drawn child. Its really important to restore.
	}

};


/* 
* Summary : Base class for all drawable objects.
* Do not modify this class!
* Parameters: this class takes the attributes set for each object like its top, left, color, .. etc
*  Return: Its doesn't return a value
*/
function Drawable (attrs) {
	var dflt = { 
		left: 0, // setting the default left and top positions to the initial point on the current screen or container
		top: 0,
		visible: true,
		theta: 0
	};
	attrs = mergeWithDefault(attrs, dflt);

	/*
	* Then we set the values of the variables in our constructor to the passed attributes through accessing each item and setting this object's values to the attributes 
	* values
	*  
	*/
	this.left = attrs.left; // setting left attribute to the contructor left variable
	this.top = attrs.top; // setting the top attribute to the constructor top variable
	this.visible = attrs.visible; // setting visible value
	this.theta = attrs.theta; // setting the theta of rotation
}

/*
* Summary: Uses the passed in context object (passed in by a doodle object)
* to draw itself.
* Parameters: the Drawable draw function takes the context (pen) which is essential to draw or stroke anything in the canvas
*/
Drawable.prototype.draw = function(context) {
	console.log("ERROR: Calling unimplemented draw method on drawable object."); // giving out error message if there was an unimplemented draw function for any of the 
	// Children
};


/* Summary : Base class for objects that cannot contain child objects.
* Do not modify this class!
* Parameters: its takes the line width and the color
* Returns: It doesn't return any value, but it inherets from Drawable
*/
function Primitive(attrs) {
	//Setting default values
	var dflt = {
		lineWidth: 1,
		color: "black"
	};
	// callling the drawable function and setting the constructor values to the passed values
	attrs = mergeWithDefault(attrs, dflt);
	Drawable.call(this, attrs);
	this.lineWidth = attrs.lineWidth;
	this.color = attrs.color;
}
Primitive.inheritsFrom(Drawable); // it inherets from the Drawable previously implemented


/*
* Summary : This function takes text and characters for the text such as font type, color and left position and its height to draw it 
* Parameters: it takes the content, fill color for the text , left position , font type and size and the height of the text
* Returns: it doesn't return a certain values but it sets the values of the constructor to the passed values
*/
function Text(attrs) {
	//Setting the default values
	var dflt = {
		content: "", // default value for content is empty string 
		fill: "black", // default fill color for the text is black
		left: 0, // default left position for the text is zero
		font: "12pt Helvetica", // default font type and size 
		height: 12 // default height 
	};
	attrs = mergeWithDefault(attrs, dflt); // setting the attrs to the default values set
	Drawable.call(this, attrs); //calling the Drawable function to add the attributes and characters to it

	this.content = attrs.content; // setting the content of the constructor to the passed content
	this.fill = attrs.fill;	// setting the fill color to the passed color
	this.font = attrs.font; // setting the font to the passed font
	this.height = attrs.height; //setting the height of the text to the passed text
	this.left = attrs.left; // setting the left position to the passed left position for the text

}
Text.inheritsFrom(Drawable); // inhereting from the drawable , the main class

/*
* Summary: this is the draw function for the text , in which it writes the text object with its attributes passed 
* Parameters: the context which is the pen we draw with on our canvas
* returns: its doesn't return a value but it draws the text on the canvas to show on the screen 
*/
Text.prototype.draw = function (context) {
	// Setting the context fill style to the fill color specified in the text method
	context.fillStyle = this.fill;
	// Setting the font to the font passed and saved
	context.font = this.font;
	// setting the properties to the content and setting its left and height to the left and height specified and filling the text through the canvas 
	// to appear on the screen as expected
	context.fillText(this.content, this.left, this.height);

};

/*
* Summary: Setting the images properties to pass it to the doodle image draw function , it sets the source or the image and its height, width , ... etc
* Parameters: it takes the properties attributes such as the src, height , width and the position based on left and top.
* Returns: It doesn't return a values but it sets the characters of the DoodleImage object to be drawn by the doodle image draw function  
*/
function DoodleImage(attrs) {
	// Setting the default values
	var dflt = {
		width: -1, // setting default width
		left: 0, // setting default left position
		top: 0, // setting the top position
		height: -1, // setting the default height
		src: "" // default source
	};

	attrs = mergeWithDefault(attrs, dflt);
	Drawable.call(this, attrs);

	//Setting the constructor variables to the values passed in and stored in the attrs to each 
	// variable

	this.width = attrs.width;
	this.height = attrs.height;
	this.src = attrs.src;
	this.left = attrs.left;
	this.top = attrs.top;


}
DoodleImage.inheritsFrom(Drawable);

/*
* Summary: This is the draw function for the DoodleImage object , its draws images according to their position and source
* Parameters: its the context which the pen essential for drawing on the canvas
* Returns: it doesn't return a value it draws the image into the canvas 
*/

DoodleImage.prototype.draw = function (context) {
	// Creates a new Image object
	var image = new Image();
	// setting the image object source to the source passed through the object attributes
	image.src = this.src;
	// Making sure that if the user didn't specifiy the height and width for the image inserted, the program would know the image 
	//width and height and set the constructor values to the image height and width and draw it
	if(this.width === -1 && this.height === -1)
	{
		this.width = image.width; // setting contructor width to the image width
		this.height = image.height; // setting constructor height to the image height
	}
	context.drawImage(image, 0,  0, this.width, this.height); // then the context draws the image object that has the source with the specified width and height
	// with the position of the image set to 0 relative to the current context as its already shifted to where 
	// we want the image to be drawn
};


/*
* Summary: Set the line object and properties to have line drawing function in the doodle to draw lines
* Parameters: It takes the line characters and contstructor required attributes
* Returns: it doesn't return a value but it sets the values of the contructor to passed values 
*/
function Line(attrs) {
	var dflt = {
		startX: 0, // the start x-coordinate
		color: "black", // color of line
		lineWidth: 0, // width of the line
		startY: 0, // the start y-coordinate
		endX: 0,//end x-coordinate
		endY: 0 //end y-coordinate
	};
	attrs = mergeWithDefault(attrs, dflt);
	Primitive.call(this, attrs);

	/*
	* Setting the values passed through the attributes to the constructor object variables
	*/
	this.startX = attrs.startX;
	this.startY = attrs.startY;
	this.endX = attrs.endX;
	this.endY = attrs.endY;
	this.color = attrs.color;
	this.lineWidth = attrs.lineWidth;

}
Line.inheritsFrom(Primitive);

/*
* Summary: draw function for the line constructor , it draws lines according to the characters passed to the line constructor.
*/
Line.prototype.draw = function (context) {

	context.beginPath(); // set the context ready to begin the path drawn by the context
	context.strokeStyle = this.color; // setting the color of the stroke of the context to draw the line in the specified color
	context.lineWidth = this.lineWidth; //setting the line width
	context.moveTo(this.startX, this.startY); // moving the pen (context) to where we want to start our line from (nothing drawn till now)
	context.lineTo(this.endX, this.endY); // drawing line to the end points of the end x and y coordinates specified in the constructor
	context.stroke(); // stroking the line to see the actual line drawn

};

/*
* Summary: Path constructor to set the properties of the path to be drawn by the draw function
* Parameters: the properties of the path such as the type, color , lineWidth and fill color and points
* Returns: Its doesn't return any value but its sets values to draw the path through the path draw function
*/

function Path(attrs) {
	var dflt = {
		type: "straight", // default path type to straight
		color: "white", // default path color
		lineWidth: 0, //default path width
		fill: false, // default color fill for the path
		points: [] // default points to draw the path through
	};
	attrs = mergeWithDefault(attrs, dflt);
	Primitive.call(this, attrs);

	// Setting the attributes passed through the constructor to the constructor variables
	this.type = attrs.type;
	this.points = attrs.points;
	this.color = attrs.color;
	this.lineWidth = attrs.lineWidth;
	this.fill = attrs.fill;
}
Path.inheritsFrom(Primitive);

/*
* Summary: Path draw function is the function that takes the default properties set by the Path constructor and uses the context to draw it on the screen
* Parameters: Its takes the context (pen) to draw with it
* Return: its doesn't return a values but it draws the path secified by the Path constructor
*/
Path.prototype.draw = function (context) {

	// if the type of the path is a bezier curve
	if(this.type === "bezier")
	{
		// begin the path for the context to draw
		context.beginPath();
		//moving the context brush
		context.moveTo(this.points[0].x, this.points[0].y);

		//Loop over the points to draw the bezier curve on
		for(var i = 1; i< this.points.length; i++)
		{
			// use context to draw bezier curve to the points specified in the points array in the path object
			context.bezierCurveTo(this.points[i].cp1x, this.points[i].cp1y, 
				this.points[i].cp2x, this.points[i].cp2y, this.points[i].x, 
				this.points[i].y);	

				//setting the stroke style and the width of the line and stroking the path.
				context.strokeStyle = this.color;
				context.lineWidth = this.lineWidth;
				context.stroke();
			}

			// closing the path to make sure when the context moves to another position it doesn't continue from the bezier curve drawn previouslys
			context.closePath();



		}

		// if the path type is straight
		if(this.type === "straight")
		{
			// begin the path with our context
			context.beginPath();
			// move the context to the first point that we wish to draw our staight path from
			context.moveTo(this.points[0].x, this.points[0].y);
			// Loop over the points specified in the constructor to draw the rest of the path
			for(var i = 1; i < this.points.length ; i++)
			{
				context.lineTo(this.points[i].x, this.points[i].y); // drawing line to the specified x and y coordinates
				context.lineWidth = this.lineWidth; // setting the line width
				context.strokeStyle = this.color; // setting the line color
				context.stroke(); // Stroking the line

			}

			context.closePath(); // closing the path to be able to separately draw another

		}


		// if the path type is quadratic
		if(this.type === "quadratic")
		{
			context.beginPath(); // begining the path the path to draw 
			context.moveTo(this.points[0].x, this.points[0].y); // move to the initial position of  the path

			for(var i=1; i<this.points.length; i++) // loop over the points specified to draw the quadratic path
			{
				// use the context and draw a quadrative curve using the points specified
				context.quadraticCurveTo(this.points[i].cp1x, this.points[i].cp1y,
					this.points[i].x, this.points[i].y);
					// setting the curve color
					context.strokeStyle = this.color;
					// setting the curve width
					context.lineWidth = this.lineWidth;
					//stroking the curve
					context.stroke();

				}
				//closing the path
				context.closePath();
			}

			// to fill the path if I want to have fill color in it
			if(this.fill !== false) // if the fill color is not false
			{
				context.fillStyle = this.fill; // then we set the fill properties
				context.fill(); // then fill the path
			}

		};

/*
* Summary: Arc constructor to set the properties of the Arc to be drawn by the draw function
* Parameters: the properties of the Arc such as the color , lineWidth ,  fill color , the center x and y coordinates , the ending theta (angle) and radius
* Returns: Its doesn't return any value but its sets values to draw the arc through the arc draw function
*/
function Arc(attrs) {
	var dflt = {
		color: "white",
		centerX: 0,
		centerY: 0,
		radius: 0,
		startingTheta: 0,
		lineWidth: 1,
		endingTheta: 0,
		counterclockwise: false,
		fill: false
	};
	attrs = mergeWithDefault(attrs, dflt);
	Primitive.call(this, attrs);

	// rest of constructor code here

	this.centerX = attrs.centerX;
	this.centerY = attrs.centerY;
	this.radius = attrs.radius;
	this.startingTheta = attrs.startingTheta;
	this.endingTheta = attrs.endingTheta;
	this.counterclockwise = attrs.counterclockwise;
	this.color = attrs.color;
	this.lineWidth = attrs.lineWidth;
	this.fill = attrs.fill;

}
Arc.inheritsFrom(Primitive);


/*
* Summary: Arc draw functionm,  is the function that takes the default properties set by the Arc constructor and uses the context to draw it on the screen
* Parameters: Its takes the context (pen) to draw with it
* Return: its doesn't return a values but it draws the path secified by the Path constructor
*/
Arc.prototype.draw = function (context) {
	// draw code here

	context.beginPath(); // begins the path to start drawing the arc
	context.arc(this.centerX, this.centerY, this.radius, this.startingTheta, this.endingTheta, this.counterclockwise); //sets the arc properties to the properties set in the 
	// arc constructor
	context.lineWidth = this.lineWidth;// setting the arc width
	context.strokeStyle = this.color; // setting the arc color
	context.stroke(); // stroking the arc (drawing it)
	context.closePath(); // closing the path

	// if the fill color is not false and there is a passed color
	if(this.fill !== false)
	{
		context.fillStyle = this.fill; // set the fill style of the context to the passed fill color
		context.fill();// fill the arc
	}


};

/*
* Summary: Container constructor to set the properties of the container to be drawn by the draw function, which might have its own 
* children in it that would be pushed and drawn too
* Parameters: the properties of the container such as the border color , lineWidth ,  fill color , the width and height , the left and top position
* Returns: Its doesn't return any value but its sets values to draw the container through the container draw function
*/
function Container(attrs) {
	var dflt = {
		width: 100, //default width
		height: 100, // default height
		fill: false, // default no fill color
		left: 0, // default left position
		top: 0, // default top position
		borderColor: "black", // default border color
		borderWidth: 0, // default border width
	};
	attrs = mergeWithDefault(attrs, dflt);
	Drawable.call(this, attrs);    
	this.children = []; // the array for the children of the container to be pushed and drawn

	// sets the passed attributes values to the constructor values 
	this.width = attrs.width;
	this.height = attrs.height;
	this.fill = attrs.fill;
	this.borderColor = attrs.borderColor;
	this.borderWidth = attrs.borderWidth;

}

//if border is zero and no stroke color no default colors
Container.inheritsFrom(Drawable);

/*
* Summary: Container draw functionm,  is the function that takes the default properties set by the Container constructor and uses the context to draw it on the screen
* If the container has children too it loops and draws each child relative to its point of reference to the container its being drawn in
* Parameters: Its takes the context (pen) to draw with it
* Return: its doesn't return a values but it draws the container and its children specified by the container constructor
*/
Container.prototype.draw = function (context) {

	//begins the path to draw the container 
	context.beginPath();
	//saves the current position of the container
	context.save();
	// sets the stroke style for the container 
	context.strokeStyle = this.borderColor;
	// sets the container line width
	context.lineWidth = this.borderWidth;   	   
	// sets the container fill style
	context.fillStyle = this.fill;
	// moves the container to the initial positin it would be drawn from, which is zero as it will be translated through the main draw function, so its zero relative 
	// to the specified position
	context.moveTo(0,0);

	// drawing the lines of the container through the specified lenght and width

	context.lineTo(this.width, 0);

	context.lineTo(this.width, this.height);

	context.lineTo(0, this.height);

	context.lineTo(0,0);


	// Setting the border width of the stroke color:
	if(this.borderWidth !== 0){
		//stroking the context
		context.stroke();
	}

	// Cliping is important if there are pictures of other shapes drawn inside the container, it would clip those shapes to show they are inside the container
	// and not over it
	context.clip();

	// if the fill color for the container is not false
	if(this.fill !== false){
		// we fill the container 
		context.fill();
	}

	context.closePath(); // we close the path to be able to draw another container separately

	// This array loops over the children of the container to draw each child in its parent container
	for(var i = 0; i < this.children.length ; i++){

		// first save the current position of the context pen
		context.save();
		// then translate the context to the position you would like to draw your container in
		context.translate(this.children[i].left, this.children[i].top);
		// then if you would like to rotate your container, specify the angle, so the context would be at the right orientation
		context.rotate(this.children[i].theta);
		// set the fill color for the container
		context.fillStyle = this.fill;
		// then take each child and call the draw function to draw it 
		this.children[i].draw(context);
		// after your drew your child come back to your initial position in the current container to draw the other children
		context.restore();
	}
	// restore the inital position on the screen to draw your other containers
	context.restore();
};

/*
* Summary: Polygon Container constructor set the properties of the polygon shaped container to be drawn by the polygon container draw function, which might have its own 
* children in it that would be pushed and drawn too
* Parameters: the properties of the polygon container container such as the border color , lineWidth ,  fill color , the width and height , the left and top position
* Returns: Its doesn't return any value but its sets values to draw the Polygon container through the polygon container draw function
*/
function PolygonContainer(attrs) {
	var dflt = {
		radius: 100, // radius of the circle around which we draw our polygon container
		sides: 3, // the number of sides in our container
		centerX: 100, // the x-coordinate for our container center
		centerY: 100, // y-coordinate for our container center
		polygonTheta: 0, // the initial theta around which we draw our container
		borderColor: "black", // the color of the container border
		fill: false, // the fill color for the container
		borderWidth: 2 // the width of the container width
	};

	attrs = mergeWithDefault(attrs, dflt);
	Container.call(this, attrs);

	this.radius = attrs.radius; // setting the radius of the container
	this.sides = attrs.sides; // setting the number of sides
	this.centerX = attrs.centerX; // setting the center x points
	this.centerY = attrs.centerY; // setting the cetner y point
	this.polygonTheta = attrs.polygonTheta; // setting the initial polygon theta
	this.left = attrs.centerX - attrs.radius; // setting the left position of the polygon which is the center x point subtracted from the radius
	this.top = attrs.centerY - attrs.radius; // setting the top position of the polygon which is the center y point subtracted from the radius
	this.borderColor = attrs.borderColor; // setting the border color of the container
	this.fill = attrs.fill; // setting the fill color
	this.borderWidth = attrs.borderWidth; // setting the width of the border


}

PolygonContainer.inheritsFrom(Container);


/*
* Summary: Polygon Container draw function,  is the function that takes the default properties set by the polygon Container constructor and uses the context to draw it on the screen
* If the container has children too it loops and draws each child relative to its point of reference to the container its being drawn in
* Parameters: Its takes the context (pen) to draw with it
* Return: its doesn't return a values but it draws the polygon container and its children specified by the polygon container constructor
*/
PolygonContainer.prototype.draw = function(context)
{

	context.beginPath(); // begins the path through which it will draw the container
	context.save(); // saves the current position of the context

	if(this.fill !== false) // if the fill color is not false, a.k.a: there is a color
	{
		context.fillStyle = this.fill; // sets the fill style to the color in the constructor
	}

	// if the border width is not set to zero
	if(this.borderWidth !== 0)
	{
		context.strokeStyle = this.borderColor; // set the stroke style to the border color
		context.lineWidth = this.borderWidth; // set the line width to the border width
	}

	// setting the current theta which we draw our points around to the polygon theta
	var currentTheta = this.polygonTheta;
	// move our context to the first point according to our radius and the current initial polygon theta
	moveTo( ( this.radius + this.radius * Math.cos(currentTheta) ), (this.radius - this.radius * Math.sin(currentTheta)) );

	// this for loops iterates based on the number of sides to get the points and stroke the path for the polygon container
	for(var i=0; i<this.sides; i++)	{
		// Incrementing the current theta to where our next point is according to the 2pi (total circle circumfrence) divided by the number of sides
		currentTheta += (2 * Math.PI) / this.sides;
		// Drawing the lines of the polygon container based on the incremented current theta
		context.lineTo( (this.radius + this.radius * Math.cos(currentTheta) ), (this.radius - this.radius * Math.sin(currentTheta)) );
	}

	//stroking the polygon container
	context.stroke();
	// filling the containers with the specified colors
	context.fill();
	// restoring the initial position to draw the next container
	context.restore();


	/*
	* This for loop goes over the children of the container and draws them and position them relative to the current container they are related to 
	*/
	for(var r = 0; r < this.children.length; r++) //loop over the number of children in the array 
	{		
		context.save(); // save the current position of the container
		context.translate(this.children[r].left, this.children[r].top); // translate the context to the child position relative to the containerr
		context.rotate(this.children[r].theta);// rotate the child in the container
		this.children[r].draw(context);// call the draw function of the child to draw it self
		context.fillStyle = this.fill; // fill the container with its fill color
		context.strokeStyle = this.borderColor; // make the border color of the child as specified
		context.restore(); // restore the parent position 

	}


}

