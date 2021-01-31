addObject({
    name: 'init',
    create() {
        global.isMusic = localStorage.getItem('isMusic') !== 'false';
        if (global.isMusic) {
            initMusic();
        }

        global.isSounds = localStorage.getItem('isSounds') !== 'false';

        createClouds();
        instanceCreate('camera', 0, 0);

        openMainMenu();
        closeButtons();
        closeBallUI();
        closeLevelName();
    },
    step() {
        cloudCreator.call(this);
    }
});