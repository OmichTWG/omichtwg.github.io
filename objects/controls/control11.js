addObject({
    name: 'control11',
    create() {
        initControl(11);
        newDialog('preEnd', dialogs.end);
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