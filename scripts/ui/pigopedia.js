const pigopedia = document.querySelector('#pigopedia');
const pigopediaContent = document.querySelector('#pigopedia-content');
const pigopediaGrid = document.querySelector('#pigopedia-grid');
const pigopediaPage = document.querySelector('#pigopedia-page');
const pigopediaName = document.querySelector('#pigopedia-name');
const pigopediaText = document.querySelector('#pigopedia-text');
const pigopediaImage = document.querySelector('#pigopedia-page-image');

const backPigopedia = () => {
    pigopediaContent.style.display = 'flex';
    pigopediaPage.style.display = 'none';
}

const openPigopedia = (e) => {
    pigopedia.style.visibility = 'visible';
    global.canClick = false;
}

const openPigopediaPage = (i) => {
    pigopediaPage.style.display = 'flex';
    pigopediaContent.style.display = 'none';
    pigopediaName.innerHTML = pigopediaItems[i].name;
    pigopediaText.innerHTML = pigopediaItems[i].text;
    pigopediaImage.src = `images/pigopedia/${pigopediaItems[i].image}`;
}

const closePigopedia = () => {
    pigopedia.style.visibility = 'hidden';
    global.canClick = true;
}

const initPigopedia = () => {
    pigopediaGrid.innerHTML = '';
    pigopediaItems.filter(i => i.lvl <= global.currentLvl).forEach((item, i) => {
        const img = document.createElement('img');
        img.src = `images/pigopedia/${item.image}`;
        img.addEventListener('click', () => openPigopediaPage(i));
        pigopediaGrid.appendChild(img);
    });
}