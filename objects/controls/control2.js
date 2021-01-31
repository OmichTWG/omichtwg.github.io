addObject({
    name: 'control2',
    create() {
        initControl(2, 'переключатель');
        newDialog(2, dialogs.toggle);
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