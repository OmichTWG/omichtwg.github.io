addObject({
    name: 'controlEnd',
    create() {
        initControl(12);
        openBattlePic();
        closeBallUI();
        closeButtons();
    },
    timer: 0,
    step() {
        cloudCreator.call(this);
    },
})