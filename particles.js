const particles=[];

class Particle{

constructor(){

this.reset();

}

reset(){

this.x=Math.random()*w;
this.y=Math.random()*h;

this.size=Math.random()*3+1;

this.speed=Math.random()*0.3+0.05;

this.alpha=Math.random();

this.offset=Math.random()*100;

}

update(){

this.y-=this.speed;

this.x+=Math.sin(Date.now()*0.0008+this.offset)*0.3;

if(this.y<-20){

this.y=h+20;
this.x=Math.random()*w;

}

}

draw(){

const g=ctx.createRadialGradient(

this.x,
this.y,
0,

this.x,
this.y,
this.size*10

);

g.addColorStop(0,
`rgba(255,240,170,${this.alpha})`);

g.addColorStop(1,
"rgba(255,240,170,0)");

ctx.fillStyle=g;

ctx.beginPath();

ctx.arc(this.x,this.y,this.size*10,0,Math.PI*2);

ctx.fill();

}

}

for(let i=0;i<180;i++){

particles.push(new Particle());

}

function updateParticles(){

particles.forEach(p=>p.update());

}

function drawParticles(){

particles.forEach(p=>p.draw());

}