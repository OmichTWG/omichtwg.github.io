addObject({
    name: 'control5',
    create() {
        initControl(5, 'а чо так сразу?');
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