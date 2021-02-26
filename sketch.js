var canva;
var form;

function setup(){
  canvas = createCanvas(850,400);

  form = new Form()
}


function draw(){
  background("pink");
  stroke(100);
  fill("black")
  text("Question:-Who is the most richest person in the world ?",100,100);

  stroke(100);
  fill("black")
  text("a:Bill Gates",100,140);

  stroke(100);
  fill("black")
  text("b:Jeff Bezos",100,160);

  stroke(100);
  fill("black")
  text("c:Elon Musk",100,180);

  stroke(100);
  fill("black")
  text("d:Sundar Pichai",100,200);

  form.display()
}
