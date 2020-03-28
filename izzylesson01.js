var canvas  = null;
var d       = 100;
var middleH = 0;
var middleW = 0;

function setup(){ 
	canvas = createCanvas(window.innerWidth-20, window.innerHeight-20);
	 middleH = height / 2;
 	 middleW = width / 2;

}

function draw() {
 	background(0);
 	DoStuffThatIzzyAsks();
 }


 function DoStuffThatIzzyAsks () { 

 	/*
 	 * Put Izzys Instructions below
 	 *
 	 *
 	 */
 	
 	 //console.log(`middleW ${middleW} and middleH:${middleH}`);
 	 middleW = middleW + random(-10,10);
 	 middleH = middleH + random(-10,10);

 	 let blue = map( middleW, 0, width, 0, 255);
 	 let red = map( middleH, 0, height, 0, 255);

 	 if (middleW > width ){
 	 	middleW = 0;
 	 }

 	 if (middleW < 0 ){
 	 	middleW = width;
 	 }


 	 if ( middleH > height ){
 	 	middleH = 0;
 	 }

 	 if ( middleH < 0  ){
 	 	middleH = height;
 	 }

 	 translate(middleW,middleH);
 	 fill(red, 0,blue);	
 	 stroke(255,0,0); 
 	 strokeWeight(2);
 	 circle(0,0,d);



 	/*
 	 *
 	 *  End Izzy's Instructions
 	 *
 	 *
 	 */
 }
