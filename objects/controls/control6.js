addObject({
    name: 'control6',
    create() {
        initControl(6, 'побег из шоушенка');
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