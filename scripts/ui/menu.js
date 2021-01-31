const menu = document.querySelector('#menu');
const ch1 = document.querySelector('#ch1');
const ch2 = document.querySelector('#ch2');

const openMenu = () => {
    menu.style.visibility = 'visible';
    ch1.checked = global.isMusic;
    ch2.checked = global.isSounds;
}

const closeMenu = () => {
    menu.style.visibility = 'hidden';
}

const setMusic = () => {
    global.isMusic = !global.isMusic;
    if (global.isMusic) {
        localStorage.removeItem('isMusic');
        playSound('main', 0.05, true);
    } else {
        localStorage.setItem('isMusic', 'false');
        stopSound('main');
    }
}

const setSounds = () => {
    global.isSounds = !global.isSounds;
    if (global.isSounds) {
        localStorage.removeItem('isSounds');
    } else {
        localStorage.setItem('isSounds', 'false');
    }
}