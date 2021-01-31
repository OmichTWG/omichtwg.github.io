addObject({
    name: 'onoff1',
    sprite: sprites.get('empty'),
    spriteOn: sprites.get('onoffOn1'),
    spriteOff: sprites.get('onoffOff'),
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
            this.collider = !global.onoff ? this.col : undefined;
        }
        this.sprite = !global.onoff ? this.spriteOn : this.spriteOff;
        this.opacity = !global.onoff ? 1 : 0.5;
    }
})