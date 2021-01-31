const battlePic = document.querySelector('#battle-pic');
const cp1 = document.querySelector('#cp1');
const cp2 = document.querySelector('#cp2');
const cd1 = document.querySelector('#color1');
const cd2 = document.querySelector('#color2');
const colors = ['white', 'black', '#ac3232', '#df7126', '#fbf236', '#6abe30', '#5fcde4', '#5b6ee1', '#76428a'];
let cpn = [3, 3];

const openBattlePic = () => {
    battlePic.style.visibility = 'visible';
    cpn[0] = 3;
    cpn[1] = 3;
    getColorElements(0).forEach((el) => {
        cp1.appendChild(el);
    });
    getColorElements(1).forEach((el) => {
        cp2.appendChild(el);
    });
}

const closeBattlePick = () => {
    battlePic.style.visibility = 'hidden';
    cp1.innerHTML = '';
    cp2.innerHTML = '';
}

const getColorElements = (i) => {
    return colors.map((c, j) => {
        const el = document.createElement('div');
        el.style.backgroundColor = c;
        if(cpn[i] === j) {
            if (!i) {
                cd1.style.backgroundColor = c;
            } else {
                cd2.style.backgroundColor = c;
            }
        }
        el.addEventListener('click', () => {
            if (!i) {
                cd1.style.backgroundColor = c;
            } else {
                cd2.style.backgroundColor = c;
            }

            cpn[i] = j;
        });
        return el;
    });
}

const startEndDialog = () => {
    const lastDialog = dialogs['res'+cpn[0]+cpn[1]];
    closeBattlePick();
    if (lastDialog) {
        newDialog('end', lastDialog);
    } else {
        if (random(0, 2)) {
            newDialog('end', dialogs.resLuck);
        } else {
            newDialog('end', dialogs.resUnluck);
        }
    }
}