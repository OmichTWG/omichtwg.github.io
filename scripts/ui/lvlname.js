const lvltitle = document.querySelector('#lvlname-title')
const lvlname = document.querySelector('#lvlname')
const lvlnum = document.querySelector('#lvlname-number')

const closeLevelName = () => {
    lvlname.style.visibility = 'hidden';
    lvlname.classList.remove('alpha-zero');
}

const openLevelName = (title, n) => {
    lvlname.style.visibility = 'visible';
    lvltitle.innerHTML = title;
    lvlnum.innerHTML = `уровень ${n}`;
    setTimeout(() => lvlname.classList.add('alpha-zero'), 1000);
    setTimeout(closeLevelName, 2000);
}