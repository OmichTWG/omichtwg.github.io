addObject({
    name: 'control10',
    create() {
        initControl(10, 'Зоопарк');
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