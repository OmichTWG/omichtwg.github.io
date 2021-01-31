addObject({
    name: 'control3',
    create() {
        initControl(3, 'соединение');
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