const mainmenu = document.querySelector('#main-menu');

const openMainMenu = () => {
    mainmenu.style.visibility = 'visible';
}

const closeMainMenu = () => {
    mainmenu.style.visibility = 'hidden';
}

const newGame = () => {
    localStorage.clear();
    if (!global.isMusic) localStorage.setItem('isMusic', 'false');
    if (!global.isSounds) localStorage.setItem('isSounds', 'false');
    goToRoom('map0');
    closeMainMenu();
}

const continueGame = () => {
    const currentLvl = localStorage.getItem('currentLvl');
    if(currentLvl) {
        goToRoom(currentLvl);
    } else {
        goToRoom('map0');
    }
    closeMainMenu();
}