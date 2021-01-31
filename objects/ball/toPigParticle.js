addObject({
    name: 'toPigParticle',
    sprite: sprites.get('toPigParticle'),
    tpX: 1,
    tpY: 1,
    depth: -1,
    isMoveToPig: true,
    direction: null,
    speed: 5,
    pig: null,
    ball: null,
    create() {
        this.direction = getDirectionVector(0, 0, randomFloat(-1,1), randomFloat(-1,1));
    },
    step() {
        if (this.xPrevious !== null) {
            const tail = instanceCreate('tail', this.x, this.y);
            tail.from = {x: this.xPrevious, y: this.yPrevious};
            tail.to = {x: this.x, y: this.y};
            tail.colorRGB = '200, 200, 255';
        }
        if (this.isMoveToPig) {
            this.x += this.direction.x * this.speed //* deltaTime;
            this.y += this.direction.y * this.speed //* deltaTime;
            this.speed -= 0.25;
            if (distanceBetween(this.pig.x, this.pig.y, this.x, this.y) <= 16 && this.speed < 0) {
                this.isMoveToPig = false;
                this.pig.isMoveToBall = true;
                this.speed = 3;
            }
        } else {
            moveToPoint(this, this.ball.x, this.ball.y, this.speed /* * deltaTime*/);
            this.speed += 0.15;
            if (distanceBetween(this.ball.x, this.ball.y, this.x, this.y) <= 1) {
                instanceDestroy(this);
            }
        }
    },
})