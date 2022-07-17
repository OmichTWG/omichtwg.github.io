const radiance = function (speed = Math.PI / 64) {
    if (this.lightCounter > 0) {
        this.lightCounter -= speed;
    } else {
        this.lightCounter = 2 * Math.PI;
    }
    this.lightOpacity = 0.75 + Math.sin(this.lightCounter) / 4;
}

const shroomSmoke = function (offsetX = 0, offsetY = 0) {
    const rand = random(8, 16);
    for (let i = 0; i < rand; i++) {
        const smoke = instanceCreate('smoke', this.x + random(-4, 4) + offsetX, this.y + random(-4, 4) + offsetY);
        smoke.setParams(
            randomFloat(0.3, 0.8),
            randomFloat(0.01, 0.03),
            randomFloat(0.5, 0.9),
            randomFloat(-0.5, 0.5),
            randomFloat(-0.5, 0.5),
            true
        );
    }
}