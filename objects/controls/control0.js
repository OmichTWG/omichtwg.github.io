addObject({
    name: 'control0',
    create() {
        initControl(0);
        closeBallUI();
        newDialog(0, dialogs.startDialog);
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