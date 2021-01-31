
var hr = hour();
  var mn = minute();
  var sc = second();
  


function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {

  background(0);

translate(200,200)
rotate (-90);

  
  strokeWeight(8);
 
  var end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke("Pink");
  var end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke("Light blue");
  var end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);
  
 
  push();
  rotate(end);
  stroke("blue");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(end2);
  stroke("red");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke("green");
  line(0,0,50,0);
  pop();
  
  
  


  }
  
  
