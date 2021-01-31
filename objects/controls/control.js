addObject({
    name: 'control',
    create() {
        initControl(1, 'свинка тяжеловес');
        newDialog(1, dialogs.start);
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