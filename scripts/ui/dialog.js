const dialog = document.querySelector('#dialog');
const dialogName = document.querySelector('#dialog-name');
const dialogText = document.querySelector('#dialog-text');

const openDialog = () => {
    dialog.style.visibility = 'visible';
    global.canClick = false;
}

const closeDialog = () => {
    dialog.style.visibility = 'hidden';
    global.canClick = true;
}

const setDialog = (name, text) => {
    dialogName.innerHTML = name;
    dialogText.innerHTML = text;
}

const initiateDialog = (dialog, num) => {
    global.currentCam.toCenter();
    openDialog();
    dialogNext(dialog, num, 0);
}

const dialogNext = (dialog, num, i) => {
    setDialog(dialog[i].person.name, dialog[i].text);
    if (dialog[i].person && dialog[i].person.target) {
        global.currentCam.findTarget(dialog[i].person.target);
    }
    const onclick = () => {
        if (i < dialog.length - 1) {
            dialogNext(dialog, num, i + 1);
        } else {
            global.currentCam.free();
            global.currentCam.findTarget('player');
            closeDialog();
            window.localStorage.setItem(`dialog${num}`, 'false');
        }

        if (dialog[i].action) {
            dialog[i].action();
        }

        document.removeEventListener('click', onclick);
    }
    document.addEventListener('click', onclick);
}