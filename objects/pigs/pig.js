addObject({
    name: 'pig',
    sprite: sprites.get('pig'),
    tpX: 16,
    tpY: 16,
    vspeed: 0,
    type: 'pig',
    collider: {...pigCollider},
    isReduction: false,
    isMoveToBall: false,
    ball: null,
    over: sprites.get('pigOver'),

    nextX: 0,
    timer: 0,
    stopTimer: 60,
    run: false,
    left: true,
    step() {
        pigStep.call(this);
        pigDefaultMove.call(this);
    },
    collision(obj) {
        pigCollision.call(this, obj);
    }
});