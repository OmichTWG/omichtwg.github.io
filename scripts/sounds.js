const playSoundWM = (name, volume = 1, loop = false) => {
    return playSound(name, volume * (global.music / 5), loop);
}

const playSoundWV = (name, volume = 1, loop = false) => {
    return playSound(name, volume * (global.volume / 5), loop);
}