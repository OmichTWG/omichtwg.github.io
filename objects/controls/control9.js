addObject({
    name: 'control9',
    create() {
        initControl(9, 'Вверх');
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