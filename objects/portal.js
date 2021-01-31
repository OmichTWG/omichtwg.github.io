addObject({
    name: 'portal',
    sprite: sprites.get('portal'),
    tpX: 16,
    tpY: 16,
    collider: {
        type: 'box',
        x1: -16,
        y1: -16,
        x2: 16,
        y2: 16,
    },
    depth: 1,
    animationSpeed: 0.1,
    timer: 0,
    yes: sprites.get('portalYes'),
    no: sprites.get('portalNo'),
    collision(obj) {
        if (obj.name === 'player' && hasName(obj.pigs, 'pig')) {
            goToRoom(global.nextRoom);
            playSoundIf('win', 0.05);
        }
    }, 
    step() {
        if (this.timer < Math.PI * 2) {
            this.timer += Math.PI / 64;
        } else {
            this.timer = 0;
        }
        this.rotation = 10 * Math.sin(this.timer);
        const v = Math.sin(this.timer / 2) / 12;
        this.scaleX = 1 + v;
        this.scaleY = 1 + v;
    },
    draw() {
        drawInstance(this);
        drawInstance({
            ...this,
            opacity: 0.5 + (1 + Math.sin(this.timer)) / 4,
            tpX: 4,
            tpY: 4,
            y: this.y - 22,
            sprite: global.hasPig ? this.yes : this.no,
            frameNumber: 0,
        })
    }
})