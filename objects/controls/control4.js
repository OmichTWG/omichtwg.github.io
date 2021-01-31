addObject({
    name: 'control4',
    create() {
        initControl(4, 'ультратяжеловес');
        newDialog(3, dialogs.one);
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