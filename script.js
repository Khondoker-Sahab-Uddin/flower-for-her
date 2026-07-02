const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

let w,h;

function resize(){

w=canvas.width=innerWidth;
h=canvas.height=innerHeight;

}

resize();

window.addEventListener("resize",resize);

function animate(){

ctx.clearRect(0,0,w,h);

updateParticles();
drawParticles();

updateFlowers();
drawFlowers();

requestAnimationFrame(animate);

}

animate();