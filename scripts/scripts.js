const hasName = (arr, name) => {
    return !!arr.filter(i => i.name === name).length;
}

const initMusic = () => {
    const onclick = () => {
        playSound('main', 0.05, true);
        document.removeEventListener('click', onclick);
    }
    document.addEventListener('click', onclick);
}

const playSoundIf = (name, volume = 1, loop = false) => {
    if (global.isSounds) {
        playSound(name, volume, loop);
    }
}

if (window.screen.width < 900) {
    const l = document.addEventListener('click', () => {
        document.documentElement.requestFullscreen();

        document.removeEventListener('click', l);
    })
}

const rotateEvent = () => {
    const rotate = document.querySelector('#rotate');
    if (window.screen.width < 500) {
        rotate.style.visibility = 'visible';
    } else {
        rotate.style.visibility = 'hidden';
    }
}

window.addEventListener('resize', rotateEvent);

rotateEvent();