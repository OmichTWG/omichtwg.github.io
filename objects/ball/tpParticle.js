addObject({
    name: 'tpParticle',
    sprite: sprites.get('toPigParticle'),
    tpX: 1,
    tpY: 1,
    depth: -1,
    speed: 5,
    lifeTime: 0,
    lifeTimMax: 0,
    direction: null,
    create() {
        this.lifeTime = random(8, 16);
        this.lifeTimeMax = this.lifeTime;
        this.direction = getDirectionVector(0, 0, randomFloat(-1,1), randomFloat(-1,1));
    },
    step() {
        if (this.xPrevious !== null) {
            const tail = instanceCreate('tail', this.x, this.y);
            tail.from = {x: this.xPrevious, y: this.yPrevious};
            tail.to = {x: this.x, y: this.y};
            tail.colorRGB = '255, 200, 255';
        }
        this.x += this.speed * this.direction.x;
        this.y += this.speed * this.direction.y;

        this.opacity = this.lifeTime / this.lifeTimeMax;

        if(this.lifeTime <= 0) {
            instanceDestroy(this);
        }
        this.lifeTime--;
    }
})