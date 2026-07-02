function animate() {

    ctx.clearRect(0, 0, w, h);

    updateParticles();
    drawParticles();

    updateFlowers();
    drawFlowers();

    requestAnimationFrame(animate);
}

animate();