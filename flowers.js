const flowers=[];

class Flower{

constructor(){

this.x=Math.random()*w;

this.y=h-40-Math.random()*250;

this.scale=Math.random()*0.4+0.5;

this.bloom=0;

this.delay=Math.random()*400;

this.swing=Math.random()*Math.PI*2;

this.color=[
"#ffd166",
"#d8b4fe",
"#c4b5fd",
"#ffffff",
"#93c5fd"
][Math.floor(Math.random()*5)];

}

update(){

if(this.delay>0){

this.delay--;

return;

}

if(this.bloom<1){

this.bloom+=0.003;

}

this.swing+=0.01;

}

draw(){

ctx.save();

ctx.translate(

this.x+Math.sin(this.swing)*6,

this.y

);

ctx.scale(this.scale,this.scale);

ctx.strokeStyle="#335544";

ctx.lineWidth=3;

ctx.beginPath();

ctx.moveTo(0,0);

ctx.lineTo(0,100);

ctx.stroke();

for(let i=0;i<8;i++){

ctx.save();

ctx.rotate((Math.PI*2/8)*i);

ctx.scale(this.bloom,this.bloom);

ctx.fillStyle=this.color;

ctx.beginPath();

ctx.ellipse(

0,

-20,

12,

28,

0,

0,

Math.PI*2

);

ctx.fill();

ctx.restore();

}

ctx.fillStyle="#fff7c7";

ctx.beginPath();

ctx.arc(0,0,10*this.bloom,0,Math.PI*2);

ctx.fill();

ctx.restore();

}

}

for(let i=0;i<25;i++){

flowers.push(new Flower());

}

function updateFlowers(){

flowers.forEach(f=>f.update());

}

function drawFlowers(){

flowers.forEach(f=>f.draw());

}