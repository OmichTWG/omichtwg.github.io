addObject({
    name: 'cloud',
    sprite: sprites.get('cloud'),
    tpY: 32,
    tpX: 64,
    speed: 0,
    depth: 500,
    create() {
        this.speed = randomFloat(0.5, 2);
    },
    step() {
        this.x -= this.speed //* deltaTime;
        if (this.x + 64 < camera.x) {
            instanceDestroy(this);
        }
    }
})