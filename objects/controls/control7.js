addObject({
    name: 'control7',
    create() {
        initControl(7, 'Телепортация');
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