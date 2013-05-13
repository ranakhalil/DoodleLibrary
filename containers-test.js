function makeSierpinski(centerX, centerY, radius, level) {
    if (level == 1) {
        var result = new PolygonContainer({
          left: centerX - radius, // left position
        	top: centerY - radius, // top position
            centerX: centerX, // x point of the center
            centerY: centerY, // y point of the center
            sides: 3, // number of sides
            radius: radius,// setting the radius of the polygon container
            borderColor: "#ffd34e",// the color of the container border
            fill: "#105b63", // the color to fill the container
            borderWidth: 5,
            polygonTheta: Math.PI / 2, // the initial theta
        });
        return result;
    } else {
        var result = new PolygonContainer({
            left: centerX - radius,
        	top: centerY - radius,
            centerX: centerX,
            centerY: centerY,
            sides: 3,
            radius: radius,
            borderColor: "#ffd34e",
            borderWidth: 5,
	        polygonTheta: Math.PI / 2,
            fill: "#fffAD5"
        });

		// calculating the top, left and right positions of each of the small traingles
        var top = makeSierpinski(
				 radius,
				 radius / 2,
				 radius / 2,
				 level - 1);
        var left = makeSierpinski(
				  radius - Math.sqrt(3) * radius / 4,
				  radius + radius / 4,
				 radius / 2,
				 level - 1);
        var right = makeSierpinski(
				   radius + Math.sqrt(3) * radius / 4,
				   radius + radius / 4,
				 radius / 2,
				 level - 1);
        result.children = [top, left, right];
        return result;
    }
}



// we start with our window onload function to load the canvas different objects in the main window

window.onload = function () {

	// get the canvas html tag element to draw in it
    var canvas = document.getElementById("myCanvas");
   // getting the 2d context which is our pen that we will draw everything with , very important
    var context = canvas.getContext("2d");

    var root = new Doodle(context);
    
	// calling the function through which we draw our polygon containers
    var sier = makeSierpinski(200, 384, 200, 5);
    // setting the first cyan container 
    var rotContainer1 = new Container({ 
        width: 150,
		height: 150,
		left: 900,
		top: 300,	
		fill: "cyan",
		borderWidth: 3,
        theta: 3 * Math.PI / 4
	});
	// creating another container that will be the child for the rotContainer 1
    var rotContainer2 = new Container({ 
        width: 100,
		height: 100,
		left: 75,
		top: 5,
		fill: "purple",
		borderWidth: 3,
        theta: Math.PI / 4
	});
	// creating the container that will rotate with the text in it (green container)
    var rotTextContainer = new Container({
        left: 85,
        top: 75,
        theta: Math.PI
    });
// create the text container
    var rotText = new Text({ 
        height: 40,
        left: 5,
        font: "32pt Helvetica",
        fill: "white",
        content: "UP"
    });
	// create container that will hold another container holding an image
	var imgFrameFrame = new Container(
	{
		width: 220,
		height: 275,
		fill:"#f5f5f5",
		left: 350, 
		top: 100,
		theta: -1/6,
		borderWidth: 2
	}
	);
	
	// the kitty image container
	var imgFrame = new Container(
	{
	width: 200,
	height: 200,
	left: 10,
	top: 10,
	borderWidth: 3
	}
	);
	//push the cat image to the container
	imgFrame.children.push(
		new DoodleImage({src: "kitty.jpg" })
		);
	// push the image container to the other container acting as a frame
	imgFrameFrame.children.push(imgFrame);
    rotContainer1.children.push(rotContainer2);
    rotContainer2.children.push(rotTextContainer);
    rotTextContainer.children.push(rotText);

	// setting the container that the green container will rotate it
    var multiRotContainer = new Container({ 
        width: 400,
		height: 400,
		left: 400,
		top: 400,
		borderWidth: 0
	});
	
	// loop to create several rotating containers
    for(var i = 0; i < 10; i++) {
        var newRot = new Container({ 
            width: 100,
		    height: 25,
		    left: 200,
		    top: 200,
		    borderWidth: 4,
            fill: "green",
            theta: i * Math.PI / 5
	    });
	// pushing the containers to their parent container
        newRot.children.push( new Text({  left: 20, height: 17, fill: "white", content: "" + newRot.theta.toFixed(2) + " rad" }));
        multiRotContainer.children.push(newRot);
    }

   //pushing the containers to the root to draw each with their children.
   root.children = [sier, rotContainer1, multiRotContainer,imgFrameFrame];
  // drawing the root doodle
   root.draw();
};
