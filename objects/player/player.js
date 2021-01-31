addObject({
    name: 'player',
    collider: {
        type: 'box',
        x1: -9,
        y1: -14,
        x2: 9,
        y2: 15,
    },
    tpX: 16,
    tpY: 16,
    vspeed: 0,
    speed: 3,
	direction: {
		x: 0,
		y: 0,
	},
    inertia: 0,
    spacePromise: false,
    pigs: null,
    hasBalls: true,
    state: 'idle',
    animationSpeed: 0.2,
    jumpSprite: sprites.get('jump'),
    runSprite: sprites.get('run'),
    idleSprite: sprites.get('player'),
    spaceDelay: 0,
    create() {
        this.pigs = [];
        this.sprite = this.idleSprite;
    },
    step() {
        this.control();
        this.moving();
        this.shoot();
        gravity.call(this);

        if (this.spaceDelay > 0) {
            this.spaceDelay--;
        }
    },
    control() {
		let x = 0;
		let y = 0;
		if  (global.canClick) {
		    keyPress.forEach(k => {
		        shadowKeyPress.add(k);
            })
            shadowKeyPress.forEach(code => {
                switch (code) {
                    case 'KeyD':
                        x += 1;
                        break;
                    case 'KeyA':
                        x += -1;
                        break;
                    case 'Space':
                        if (this.spaceDelay <= 0) {
                            if (hasName(this.pigs, 'pigWing') ||
                                (intID !== null &&
                                    collisionCollider((i) => i.type === 'solid', this.x, this.y + 29, this.collider))) {
                                this.spacePromise = true;
                            }
                            this.spaceDelay = 25;
                        }
                        break;
                }
            });
            shadowKeyPress.clear();
            keyDown.forEach(code => {
                switch (code) {
                    case 'Space':
                        if ((collisionCollider((i) => i.type === 'solid', this.x, this.y + 29, this.collider) &&
                            this.vspeed >= 0) || hasName(this.pigs, 'pigWing')) {
                            this.spacePromise = true;
                        }
                        this.spaceDelay = 30;
                        break;
                    case 'KeyR':
                        playSoundIf('restart', 0.05);
                        roomRestart();
                        break;
                }
            })
        }
		if (x !== 0 || y !== 0) {
			this.direction = {x, y};
			if (this.inertia < this.speed) {
				this.inertia += 0.35 //* deltaTime;
			}
        }
        if (this.direction.x >= 0) {
            this.scaleX = -1
        } else {
            this.scaleX = 1;
        }

        let st = '';
        if (collisionCollider((i) => i.type === 'solid', this.x, this.y + this.vspeed /* * deltaTime*/, this.collider)) {
            if (x > 0) {
                st = 'right';
            } else if (x < 0) {
                st = 'left';
            } else {
                st = 'idle';
            }
        } else {
            st = 'jump';
        }

        if (st !== this.state) {
            this.state = st;
            switch(st) {
                case 'right':
                    this.scaleX = -1;
                    this.frameNumber = 0;
                    this.sprite = this.runSprite;
                    break;
                case 'left':
                    this.scaleX = 1;
                    this.frameNumber = 0;
                    this.sprite = this.runSprite;
                    break;
                case 'idle':
                    this.frameNumber = 0;
                    this.sprite = this.idleSprite;
                    break;
                case 'jump':
                    this.frameNumber = 0;
                    this.sprite = this.jumpSprite;
                    break;
            }
        }
    },
    shoot() {
        mouseDown.forEach(code => {
            switch(code) {
                case 0:
                    if (this.hasBalls && global.canClick) {
                        if (!hasName(this.pigs, 'pigTp')) {
                            const ball = instanceCreate('ball', this.x, this.y);
                            ball.direction = getDirectionVector(this.x - camera.x, this.y - camera.y, mouse.x, mouse.y);
                            ball.player = this;
                            this.hasBalls = false;
                        } else {
                            const ball = instanceCreate('ball', camera.x + mouse.x, camera.y + mouse.y);
                            const r = random(5, 10);
                            for (let i = 0; i < r; i++) {
                                instanceCreate('tpParticle', camera.x + mouse.x, camera.y + mouse.y)
                            }
                            ball.player = this;
                            ball.playerPrompt = 1;
                            ball.stop = true;
                            playSoundIf('tp', 0.1);
                            this.hasBalls = false;
                        }
                    }
            }
        })
    },
    moving() {
		const direction = getDirectionVector(0, 0, this.direction.x, this.direction.y);

		const moveX = this.inertia * direction.x //* deltaTime;
        const moveY = this.inertia * direction.y //* deltaTime;

		if (!collisionCollider((i) => i.type === 'solid', this.x + moveX, this.y - 1, this.collider)) {
			this.x += moveX;
		}
		if (!collisionCollider((i) => i.type === 'solid', this.x, this.y + moveY - 1, this.collider)) {
			this.y += moveY;
        }

        if (this.inertia > 0) {
			this.inertia -= 0.2 //* deltaTime;
		} else {
			this.inertia = 0;
        }
        
        if(this.spacePromise && (hasName(this.pigs, 'pigWing') || collisionCollider((i) => i.type === 'solid', this.x, this.y + 1, this.collider))) {
            if (!hasName(this.pigs, 'pigBig'))
                this.vspeed = this.pigs.length ? -3.5 : -6;
            this.spacePromise = false;
            playSoundIf('jump', 0.2);
        }

        if (this.y > currentRoom.h) {
            roomRestart();
        }
    },
    draw() {
        drawInstance(this);
        if (this.pigs[0]) {
            drawInstance({
                ...this,
                sprite: this.pigs[0].name !== 'pigWing' ? this.pigs[0].sprite :
                    (this.vspeed >= 0 ? this.pigs[0].sprite1 : this.pigs[0].sprite2),
                frameNumber: 0,
                x: this.x,
                y: this.y - 26,
            });
        }
        if (this.pigs[1]) {
            drawInstance({
                ...this,
                sprite: this.pigs[1].name !== 'pigWing' ? this.pigs[1].over :
                    (this.vspeed >= 0 ? this.pigs[1].over1 : this.pigs[1].over2),
                frameNumber: 0,
                x: this.x,
                y: this.y - 26,
            });
        }
    },
    addPig(pig) {
        if (pig.name !== 'pigBig') {
            if (!hasName(this.pigs, 'pigBig')) {
                if (this.pigs.length === 2) {
                    instanceCreate(this.pigs[0].name, this.x, this.y);
                    this.pigs = [this.pigs[1], pig];
                } else {
                    this.pigs.push(pig);
                }
            } else {
                instanceCreate('pigBig', this.x, this.y);
                this.pigs = [pig];
            }
        } else {
            if (this.pigs[0])
                instanceCreate(this.pigs[0].name, this.x - 16, this.y);
            if (this.pigs[1])
                instanceCreate(this.pigs[1].name, this.x + 16, this.y);
            this.pigs = [pig, pig];
        }
        setImages(this.pigs[0] ? this.pigs[0].sprite : null, this.pigs[1] ? this.pigs[1].sprite : null);
        global.pigCount = !hasName(this.pigs, 'pigBig') ? this.pigs.length : 1;
        global.hasPig = hasName(this.pigs, 'pig');
    }
})