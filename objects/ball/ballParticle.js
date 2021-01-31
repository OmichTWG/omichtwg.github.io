addObject({
    name: 'ballParticle',
    sprite: sprites.get('ballParticle'),
    direction: null,
    tpX: 1,
    tpY: 1,
    collider: {
        type: 'box',
        x1: -1,
        y1: -1,
        x2: 2,
        y2: 2,
    },
    vspeed: 0,
    speed: 0,
    create () {
        this.direction = getDirectionVector(0, 0, randomFloat(-1, 1), randomFloat(-0.2, -1));
        this.speed = randomFloat(1.5, 2);
    },
    step() {
        gravity.call(this, true);
        this.x += this.speed * this.direction.x //* deltaTime;
        this.y += this.speed * this.direction.y //* deltaTime;
    },
    collision(obj) {
        switch(obj.type) {
            case 'solid':
                instanceDestroy(this);
                break;
        }
    }
});