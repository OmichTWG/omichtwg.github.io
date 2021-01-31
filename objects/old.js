addObject({
    name: 'old',
    sprite: sprites.get('old'),
    collider: {
        type: 'box',
        x1: -11,
        y1: -14,
        x2: 11,
        y2: 15,
    },
    tpX: 16,
    tpY: 32,
    step() {
      gravity.call(this);
    },
})