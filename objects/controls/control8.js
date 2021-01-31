addObject({
    name: 'control8',
    create() {
        initControl(8, 'Прыжок веры');
    },
    timer: 0,
    step() {
        cloudCreator.call(this);
    },
    depth: -100,
    draw() {
        blacked.call(this);
    }
})