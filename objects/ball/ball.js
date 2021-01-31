addObject({
    name: 'ball',
    sprite: sprites.get('ball'),
    tpX: 8,
    tpY: 8,
    animationSpeed: 0.1,
    collider: {
        type: 'box',
        x1: -6,
        y1: -6,
        x2: 6,
        y2: 6,
    },
    direction: {
        x: 0,
        y: 0,
    },
    player: null,
    speed: 7,
    stop: false,
    vspeed: 0,
    toPlayer: false,
    pig: null,
    playerPrompt: null,
    step() {
        if (!this.stop) {
            this.x += this.speed * this.direction.x //* deltaTime;
            this.y += this.speed * this.direction.y //* deltaTime;
        }

        if (this.toPlayer) {
            moveToPoint(this, this.player.x, this.player.y, this.speed /* * deltaTime*/);
            if (distanceBetween(this.x, this.y, this.player.x, this.player.y) <= 1) {
                if (this.pig) {
                    this.player.addPig(this.pig);
                }
                this.player.hasBalls = true;
                instanceDestroy(this);
            }
        }

        if (this.playerPrompt !== null) {
            if (this.playerPrompt > 0) {
                this.playerPrompt--;
            } else {
                if (!this.pig)
                    this.toPlayer = true;
                this.playerPrompt = null;
            }
        }
    },
    collision(obj) {
        switch(obj.type) {
            case 'solid':
                if (!this.stop) {
                    const r = random(2, 5);
                    for (let i = 0; i < r; i++) {
                        instanceCreate('ballParticle', this.x, this.y);
                    }
                    this.stop = true;
                    this.toPlayer = true;
                    playSoundIf('knock');
                }
                break;
            case 'pig':
                if (!this.toPlayer) {
                    this.stop = true;
                    this.open(true);
                    this.rotation = Math.acos(this.direction.x) / Math.PI * 180;
                }
                break;
        }
    },
    open (open) {
        if (open) {
            this.sprite = sprites.get('ballOpen');
            this.tpX = 16;
            this.tpY = 16;
        } else {
            this.sprite = sprites.get('ball');
            this.tpX = 8;
            this.tpY = 8;
            this.frameNumber = 0;
        }
    }
})