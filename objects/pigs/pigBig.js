addObject({
    name: 'pigBig',
    sprite: sprites.get('pigBig'),
    tpX: 16,
    tpY: 16,
    vspeed: 0,
    type: 'pig',
    collider: {...pigCollider},
    isReduction: false,
    isMoveToBall: false,
    ball: null,
    over: sprites.get('empty'),

    nextX: 0,
    timer: 0,
    stopTimer: 60,
    run: false,
    step() {
        pigStep.call(this);

        if (!this.isReduction) {
            gravity.call(this);
        }
    },
    collision(obj) {
        pigCollision.call(this, obj);
    }
});