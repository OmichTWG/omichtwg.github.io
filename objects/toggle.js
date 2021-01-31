addObject({
    name: 'toggle',
    sprite: sprites.get('empty'),
    spriteOn: sprites.get('toggleOn'),
    spriteOff: sprites.get('toggleOff'),
    collider: {},
    collidedId: null,
    depth: 1,
    step() {
        this.sprite = global.onoff ? this.spriteOn : this.spriteOff;
    },
    collision(obj) {
        if (obj.name === 'ball' && obj.id !== this.collidedId) {
            global.onoff = !global.onoff;
            this.collidedId = obj.id;
        }
    }
})