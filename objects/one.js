addObject({
    name: 'one',
    sprite: sprites.get('one'),
    collider: {},
    depth: 10,
    type: 'solid',
    col: null,
    colGet: false,
    step() {
        if (!this.colGet && this.collider && this.collider.type) {
            this.col = this.collider;
            this.colGet = true
        } else {
            this.collider = global.pigCount !== 1 ? this.col : undefined;
        }
        this.opacity = global.pigCount !== 1 ? 1 : 0.5;
    }
})