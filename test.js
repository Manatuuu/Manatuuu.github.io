//document.write('<img src="./skin/Test.png" width="64" height="64" />' + "<br>");
//document.write('<img src="./skin/Background.png" width="800" height="600" />' + "<br>");
//document.write("Test message");


//var count = 0;


"use strict"


let gFrame = 0;
let gBackground;
let gCircle;

var fontSize = 30;

var max = 100;

function Timer()
{
	gFrame++;

	const ca = document.getElementById("main");
	const g = ca.getContext("2d");

	ca.width = 800;
	ca.height = 600;

	g.drawImage(gBackground, 0, 0);
	//start x = 5;
	//start width = ca.width - gCircle.width - 5;
	//start y = 5;
	//start height = ca.height - gCircle.height - 5;

	for (var i = 0;  i < 1;  i++  ) {
		var rx = Math.floor(Math.random() * (ca.width - gCircle.width - 5)) + 5;
		var ry = Math.floor(Math.random() * (ca.height - gCircle.height - 5)) + 5;
		g.drawImage(gCircle, rx, ry, 100 , 50);
	}
	
    g.font = fontSize + "px 'ＭＳ ゴシック'";
	g.fillText(r, 5, fontSize)

	//console.log(count++);
}
window.onload = function()
{
	gBackground = new Image();
	gCircle = new Image();
	gBackground.src = "skin/Background.png";
	gCircle.src = "skin/Circle.png";
	setInterval(function(){ Timer() }, 1000 / 5);
}