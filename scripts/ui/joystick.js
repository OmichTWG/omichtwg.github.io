const joy = new JoyStick('joy', {
    internalFillColor: '#ffffffcc',
    internalStrokeColor: '#fff',
    externalStrokeColor: '#fff',
});

let shadowKeyPress = new Set();

let intID = null;

const interval = () => {
    if (joy.GetPosX() > 70) {
        shadowKeyPress.add('KeyD');
    } else if (joy.GetPosX() < 70) {
        shadowKeyPress.add('KeyA');
    }

    if (joy.GetPosY() < 50) {
        shadowKeyPress.add('Space');
    }
};

const joyResize = () => {
    if (window.screen.width < 900) {
        if (intID === null) {
            intID = setInterval(interval, 1000 / config.fps);
            document.querySelector('#joy').style.visibility = 'visible';
            document.querySelector('#rbutt').style.visibility = 'visible';
        }
    } else {
        if (intID !== null) {
            clearInterval(intID);
            intID = null;
            document.querySelector('#joy').style.visibility = 'hidden';
            document.querySelector('#rbutt').style.visibility = 'hidden';
        }
    }
}

window.addEventListener('resize', joyResize);

joyResize();