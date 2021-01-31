addObject({
    name: 'pigWing',
    sprite: null,
    sprite1: sprites.get('pigWing'),
    sprite2: sprites.get('pigWing2'),
    tpX: 16,
    tpY: 16,
    vspeed: 0,
    type: 'pig',
    collider: {...pigCollider},
    isReduction: false,
    isMoveToBall: false,
    ball: null,
    over1: sprites.get('pigWingOver'),
    over2: sprites.get('pigWingOver2'),

    jumpTimer: 0,
    run: false,
    step() {
        pigStep.call(this);

        if (!this.isReduction) {
            gravity.call(this);

            if (this.run) {
                if (collisionCollider((i) => i.type === 'solid', this.x, this.y - 4 + this.vspeed, this.collider)) {
                    this.vspeed = 0;
                }
            }

            if(this.run) {
                if (this.timer < 120) {
                    this.timer += 1//deltaTime;
                } else {
                    this.timer = 0;
                    this.run = false;
                }

                if (this.jumpTimer < 40) {
                    this.jumpTimer += 1//deltaTime;
                } else {
                    this.vspeed = -3.5;
                    this.jumpTimer = 0;
                }
            } else {
                if (this.stopTimer < 30) {
                    this.stopTimer += 1//deltaTime;
                } else {
                    this.stopTimer = 0;
                    this.run = true;
                }
            }
        }

        this.sprite = this.vspeed >= 0 ? this.sprite1 : this.sprite = this.sprite2;
    },
    collision(obj) {
        pigCollision.call(this, obj);
    }
});