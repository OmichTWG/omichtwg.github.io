 const gravity = function(collide = false) {
    if(!collisionCollider((i) => i.type === 'solid', this.x, this.y + (!collide ? this.vspeed /* * deltaTime*/ : 0), this.collider)) {
        this.vspeed += global.g //* deltaTime;
        this.y += this.vspeed //* deltaTime;
    } else {
        this.vspeed = 0;
    }
 }

//control
const createClouds = function() {
    const r = 10;
    for (let i = 0; i < r; i++) {
        instanceCreate('cloud', random(0, currentRoom.w), random(0, currentRoom.h));
    }
}

const cloudCreator = function() {
    if (this.timer < 60) {
        this.timer += 1//deltaTime;
    } else {
        instanceCreate('cloud', camera.x + camera.w() + 64, random(camera.y, camera.y + camera.h()));
        this.timer = 0;
    }
}

//pig
 const pigCollider = {
    type: 'box',
    x1: -16,
    y1: -6,
    x2: 16,
    y2: 16,
};

 const pigStep = function() {
    if (this.isReduction) {
        this.rotation += 1.5;
        this.scaleX -= Math.sign(this.scaleX) * 0.02;
        this.scaleY -= 0.02;
        if (this.scaleY <= 0) {
            this.ball.open(false);
            this.ball.toPlayer = true;
            instanceDestroy(this);
        }
    }

     if (this.y > currentRoom.h) {
         instanceDestroy(this);
     }

    if(this.isMoveToBall) {
        moveToPoint(this, this.ball.x, this.ball.y, 3);
    }
 }

 const pigCollision = function(obj) {
    switch(obj.name) {
        case 'ball':
            if (!this.isReduction && !obj.toPlayer && !obj.pig) {
                obj.pig = this;
                this.ball = obj;
                const r = random(12, 18);
                for (let i = 0; i < r; i++) {
                    const p = instanceCreate('toPigParticle', this.x, this.y);
                    p.pig = this;
                    p.ball = obj;
                }
                this.isReduction = true;
                playSoundIf('hru', 0.2);
            }
    }
 }

 const pigDefaultMove = function() {
     if (!this.isReduction) {
         gravity.call(this);

         if (this.run) {
             if (!collisionCollider((i) => i.type === 'solid', this.x + 2 * Math.sign(this.nextX), this.y - 4, this.collider)) {
                 moveToPoint(this, this.x + this.nextX, this.y - 50, 2);
             } else {
                 this.x -= 2 * Math.sign(this.nextX);
                 this.nextX = -this.nextX;
                 this.scaleX = -this.scaleX;
             }
         }

         if(this.run) {
             if (this.timer < 100) {
                 this.timer += 1//deltaTime;
             } else {
                 this.timer = 0;
                 this.run = false;
             }
         } else {
             if (this.stopTimer < 60) {
                 this.stopTimer += 1//deltaTime;
             } else {
                 this.stopTimer = 0;
                 this.run = true;
                 this.nextX = this.left ? -10 : 10;
                 this.left = !this.left;
                 if (this.nextX > 0) {
                     this.scaleX = -1;
                 } else {
                     this.scaleX = 1;
                 }
             }
         }
     }
 }

//controls
const initControl = (lvl, name) => {
    global.currentLvl = lvl;
    initPigopedia();

    const cam = instanceCreate('camera', 0, 0);
    global.currentCam = cam;
    cam.findTarget('player');

    global.nextRoom = `map${lvl + 1}`;
    createClouds();

    if (name) {
        openLevelName(name, lvl);
    }

    localStorage.setItem('currentLvl', `map${lvl}`);
    openButtons();
    openBallUI();
    clearBallUI();
    closeMenu();
    global.onoff = false;
    global.pigCount = 0;
    global.hasPig = 0;

    instanceCreate('mountain', 320, 420);
}

const blacked = function() {
    setDrawColor('black');
    drawRectFilled(-camera.x, 0, camera.x - 1, camera.h());
    drawRectFilled(-camera.x + currentRoom.w - 1, 0, camera.w(), camera.h());
    drawRectFilled(0, -camera.y, camera.w(), camera.y - 1);
    drawRectFilled(0, -camera.y + currentRoom.h - 1, camera.w(), camera.h());
    drawInstance({
        ...this,
        tpX: 0,
        tpY: 0,
        scaleX: 1,
        scaleY: currentRoom.h / 32 - 2,
        sprite: sprites.get('blackedLong'),
        x: 0,
        y: 32,
    });
    drawInstance({
        ...this,
        tpX: 0,
        tpY: 0,
        scaleX: -1,
        scaleY: currentRoom.h / 32 - 2,
        sprite: sprites.get('blackedLong'),
        x: currentRoom.w,
        y: 32,
    });
    drawInstance({
        ...this,
        rotation: -90,
        tpX: 0,
        tpY: 0,
        scaleX: -1,
        scaleY: currentRoom.w / 32 - 2,
        sprite: sprites.get('blackedLong'),
        x: 32,
        y: 0,
    });
    drawInstance({
        ...this,
        rotation: -90,
        tpX: 0,
        tpY: 0,
        scaleX: 1,
        scaleY: currentRoom.w / 32 - 2,
        sprite: sprites.get('blackedLong'),
        x: 32,
        y: currentRoom.h,
    });

    //

    drawInstance({
        ...this,
        tpX: 0,
        tpY: 0,
        scaleX: 1,
        scaleY: 1,
        sprite: sprites.get('blackedCorner'),
        x: 0,
        y: 0,
    });
    drawInstance({
        ...this,
        tpX: 0,
        tpY: 0,
        scaleX: -1,
        scaleY: 1,
        sprite: sprites.get('blackedCorner'),
        x: currentRoom.w,
        y: 0,
    });
    drawInstance({
        ...this,
        tpX: 0,
        tpY: 0,
        scaleX: 1,
        scaleY: -1,
        sprite: sprites.get('blackedCorner'),
        x: 0,
        y: currentRoom.h,
    });
    drawInstance({
        ...this,
        tpX: 0,
        tpY: 0,
        scaleX: -1,
        scaleY: -1,
        sprite: sprites.get('blackedCorner'),
        x: currentRoom.w,
        y: currentRoom.h,
    });
}

//dialogs
const newDialog = (num, dialog) => {
    if (window.localStorage.getItem(`dialog${num}`) !== 'false') {
        setTimeout(() => initiateDialog(dialog, num));
    }
}