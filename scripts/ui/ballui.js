const ballui = document.querySelector('#ball-ui');
const bimg1 = document.querySelector('#ball-ui1');
const bimg2 = document.querySelector('#ball-ui2');

const openBallUI = () => {
    ballui.style.visibility = 'visible';
}

const closeBallUI = () => {
    ballui.style.visibility = 'hidden';
}

const clearBallUI = () => {
    bimg1.innerHTML = '';
    bimg2.innerHTML = '';
}

const setImages = (img1, img2) => {
    clearBallUI();
    if (img1) {
        const ni = document.createElement('img');
        ni.src = img1[0].src;
        bimg1.append(ni);
    }
    if (img2) {
        const ni = document.createElement('img');
        ni.src = img2[0].src;
        bimg2.append(ni);
    }
}