//Ачивки
const achieve = document.querySelector('.ui-achievement-card');
const achieveText = document.querySelector('.ui-achievement-card-text');

//Диалог
const dialogContainer = document.querySelector('.ui-dialog');
const dialog = document.querySelector('.ui-dialog-card');
const dialogName = document.querySelector('.ui-dialog-card-name');
const dialogText = document.querySelector('.ui-dialog-card-text');
const dialogIcon = document.querySelector('.ui-dialog-card-icon');

//Меню
const menu = document.querySelector('.ui-menu-card');
const soundScale = document.querySelector('.sounds-scale');
const musicScale = document.querySelector('.music-scale');

//Меню
const modal = document.querySelector('.ui-modal-card');
const modalText = document.querySelector('.ui-modal-text');

const increasePower = (onSuccess) => {
    if (global.power >= 3) {
        return;
    }
    if (onSuccess) {
        onSuccess();
    }
    global.power++;
    playSoundWV('eat', 0.1);
    const powerAchieve = [
        'Возможность тащить тело',
        'Возможность поднимать тело\n Скорость передвежения увеличена',
        'Возможность кидать тело\n Скорость передвежения увеличена',
    ]
    openAchieve(powerAchieve[global.power - 1]);
    if (global.power === 1) {
        startDialog(foodScene);
    }
    if (global.power === 2) {
        startDialog(takePrompt);
    }
    if (global.power === 3) {
        startDialog(throwPrompt);
    }
}

const openAchieve = (text, time = 5000) => {
    achieve.style.visibility = 'visible';
    achieveText.innerText = text;
    setTimeout(() => achieve.style.visibility = 'hidden', time);
}

const playMusicIfInteract = () => {
    const listener = () => {
        global.startVolume = 0.3;
        global.currentMusic = playSoundWM('soundtrack', global.startVolume, true);
        document.removeEventListener('keydown', listener);
        document.removeEventListener('click', listener);
    }
    document.addEventListener('keydown', listener);
    document.addEventListener('click', listener);
}

playMusicIfInteract();

const openDialog = (config) => {
    const {text, name = null, centred = false, noIcon = false} = config;
    dialog.style.visibility = 'visible';
    dialogContainer.style.alignItems = centred ? 'center' : 'end';
    dialogName.innerText = name ? name + ':' : '';
    dialogName.style.display = name ? 'flex' : 'none';
    dialogText.innerText = text;
    dialogIcon.style.display = !noIcon ? 'flex' : 'none';
}

const closeDialog = () => {
    dialog.style.visibility = 'hidden';
}

const openMenu = () => {
    menu.style.visibility = 'visible';
    global.menu = true;
}

const closeMenu = () => {
    menu.style.visibility = 'hidden';
    global.menu = false;
}

const rectFull = '<div class="rect rect-full"></div>'
const rectBlank = '<div class="rect rect-blank"></div>'
const getRectMotherfucker = (value) => rectFull.repeat(value) + rectBlank.repeat((10 - value));

const changeVolume = (value) => {
    if (global.volume + value < 0) {
        global.volume = 0;
    } else if (global.volume + value > 10) {
        global.volume = 10;
    } else {
        global.volume += value;
    }
    soundScale.innerHTML = getRectMotherfucker(global.volume);
}

changeVolume(0);

const changeMusic = (value) => {
    if (global.music + value < 0) {
        global.music = 0;
    } else if (global.music + value > 10) {
        global.music = 10;
    } else {
        global.music += value;
    }
    if (global.currentMusic) {
        global.currentMusic.volume = (global.music / 5) * global.startVolume;
    }
    musicScale.innerHTML = getRectMotherfucker(global.music);
}

changeMusic(0);

const openModal = (text, accept, decline) => {
    modal.style.visibility = 'visible';
    modalText.innerText = text;
    global.modalAccept = accept || (() => {});
    global.modalDecline = decline || (() => {});
    global.modal = true;
}

const closeModal = () => {
    modal.style.visibility = 'hidden';
    global.modal = false;
}