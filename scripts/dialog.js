const startDialog = (dialog) => {
    let i = 0;
    global.pause = true;
    let dialogKeyboard = null;

    const endDialog = () => {
        __canvas.removeEventListener('click', dialogNext);
        document.removeEventListener('keydown', dialogKeyboard);
        closeDialog();
        global.pause = false;
        global.camera.target = global.player;
    }

    const dialogNext = () => {
        if (dialog[i]) {
            if (dialog[i].text) {
                openDialog({
                    text: typeof dialog[i].text === 'function' ? dialog[i].text() : dialog[i].text,
                    name: dialog[i].name,
                    centred: dialog[i].center,
                });
            }
            if (dialog[i].action) {
                dialog[i].action();
            }
            if (dialog[i].target) {
                global.camera.target = findNearest(dialog[i].target);
            }
            if (dialog[i].end) {
                endDialog();
            }
            i++;
        } else {
            endDialog()
        }
    }
    dialogKeyboard = (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
            dialogNext();
        }
    }
    __canvas.addEventListener('click', dialogNext);
    document.addEventListener('keydown', dialogKeyboard);
    dialogNext();
}

//Диалоги
const startScene = [
    {
        target: 'player',
        text: 'Сделано специально для TWG 22',
        center: true,
    },
    {
        target: 'player',
        name: 'Руслан',
        text: '8 лет...',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Вот уже 8 лет я прозябаю в клетке внутри этой темной пещеры, скованный цепью с моим отцом, Савелием.',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Отец убил царя, во время народного востания, за что его бросили в эту клетку с его единственным родственником, со мной.',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Время идет. На поверхности произошли серьезные изменения, что можно предположить по отсутствию охранников, удерживавщих нас здесь и приносивших нам еду.',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Уже долгое время как можно свободно выйти на поверхность, но отец не желая что-либо менять, сидит здесь, добывая пищу из случайных пещерных животных: крыс, кротов, летучих мышей.',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Он так наловчился добывать пищу, что даже наростил себе живот невероятного размера. Он так же научился брить бороду куском металического прута от клетки и добывать воду стекающую со сталактитов.',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Я же не приспособленный ко всей этой тюремной жизни мечтал только об одном - сбежать на поверхность, чего не мог себе позволить из-за колоссальной разницы в весе с отцом.',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Но вот в один судьбоносный день случилось то, к чему шло уже несколько лет.',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Отец страдал от неизвестной болезни. Изо дня в день ему становилось все хуже и хуже...',
        action: () => {
            stopSound('soundtrack');
            const lightningEffect = findNearest('lightningEffect');
            lightningEffect.blackScreen = true;
        }
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'И в итоге он скончался...',
        action: () => {
            const lightningEffect = findNearest('lightningEffect');
            lightningEffect.blackScreen = false;
            lightningEffect.lightning = true;
            playSoundWV('lightning', 0.2);
            const fire = findNearest('campfire');
            for (let i = 0; i < 5; i++) {
                fire.smoke();
            }
            fire.generateSmoke = false;
            fire.sprite = sprites.get('extinguished');
            fire.frameNumber = 0;
            fire.lighting = false;
            const strongman = findNearest('strongman');
            strongman.sprite = sprites.get('strongman');
        }
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Не смотря на то, что отец фактически удерживал меня здесь я чувствовал глубокую скорбь, так как он, все же, воспитал меня и во многом мне помогал: делился пищей и водой, и защищал меня от местной фауны.',
        action: () => playSoundWM('soundtrack', global.startVolume, true),
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Но прошлого не вернуть и нужно двигаться дальше!',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Однако сложно двигаться с тем единственным что отец оставил в качестве своего наследия - своим массивным телом.',
    }
];

const chainScene = [
    {
        target: 'player',
        name: 'Руслан',
        text: 'Я настолько слаб, что даже не могу сдвинуть тело отца.',
    }
];

const ratScene = [
    {
        target: 'player',
        name: 'Руслан',
        text: 'Как же мне повезло, еда сама пришла в мои руки.',
    },
    {
        target: 'rat',
        name: 'Крыса',
        text: '*пищит* *грызет Савелия*',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Надо подойти и раздавить ее ногой.',
    },
];

const foodScene = [
    {
        target: 'player',
        name: 'Руслан',
        text: 'Отлично! Теперь у меня появились силы, чтобы хотя бы тащить тело.',
    }
];

const cannibalismScene = [
    {
        target: 'player',
        name: 'Руслан',
        text: 'Черт! Мне нужны силы. Такими темпами до выхода я буду ковылять целую вечность, если не умру от голода. А может все-таки?..'
    },
    {
        target: 'player',
        text: 'Вы можете получить дополнительную способность раньше времени, откусив кусок плоти вашего отца, она поможет вам пропустить некоторые головоломки. Для этого подойдите к Савелию и нажмите G.',
        center: true,
    }
];

const bodyScene = [
    {
        target: 'player',
        name: 'Руслан',
        text: 'Ох черт... Я даже не знаю повезло мне или нет. Кто-то оставил здесь недоеденный труп лани, но откуда в подземелье лань, а тем более кто-то кто способен ее убить?',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: () => global.power <= 1 ? 'В любом случае, это бесплатная еда.' : 'Похоже туша уже испорчена. Жаль.',
        action: () => {
            if (global.power <= 1) {
                const body = findNearest('body');
                instanceCreate('food', body.x + 16, body.y + 24);
                body.deactivate();
            }
        }
    }
];

const takePrompt = [
    {
        target: 'player',
        text: 'Для того чтобы взять в руки батю подойдите к его телу и нажмите E. Чтобы бросить батю снова нажми E.',
        center: true,
    }
];

const throwPrompt = [
    {
        target: 'player',
        text: 'Для того чтобы кинуть батю возьмите его в руки и нажмите ЛКМ, указав курсором точку броска.',
        center: true,
    }
];

const closedScene = [
    {
        target: 'player',
        name: 'Руслан',
        text: 'Дверь закрыта. Возможно я где-то пропустил механизм отпирающий ее.',
    }
];

const fallScene = [
    {
        target: 'player',
        name: 'Руслан',
        text: 'Клянусь, я уже видел свет солнца. Нужно было только дотянуться, эх... Почему я так неудачлив?',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Да уж, падать с такой высоты было ужасной идеей. Хорошо что здесь мягк... Мягкие... Грибы...',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Может попробовать их на вкус?',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: '*Хрум* Птьфу! Мерзость! Не знаю ядовиты они или нет, но что-то мне подсказывает, что есть это не стоит.',
        action: () => playSoundWV('eat', 0.1),
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'В любом случае я должен был подниматься на поверхность, а упал в глубокую яму. Надеюсь путь окажется верным.',
    },
];

const shroomScene = [
    {
        target: 'player',
        name: 'Руслан',
        text: 'Какой же этот гриб мерзкий. Он дурно пахнет и из него льется какая-то слизь.',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Пожалуй лучше не буду его касаться, но можно было бы попробовать туда что-нибудь бросить.',
    },
];

const cannibalism1Scene = [
    {
        target: 'player',
        name: 'Руслан',
        text: '*Тошнит* Чувствую себя отвратительно. Я так далго жил с этим человеком.',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'А главное я все сильнее начинаю понимать, почему он решил остаться здесь, а не выбраться на поверхность.',
    },
    {
        target: 'player',
        action: () => {
            increasePower();
            closeDialog();
        }
    }
];

const restartGame = () => {
    global.currentMusic?.pause();
    global.currentMusic = playSoundWM('soundtrack', global.startVolume, true);
    global = getGlobalInitialCopy();
    goToRoom('start-room');
}

const cannibalism2Scene = [
    {
        target: 'player',
        name: 'Руслан',
        text: '*Блюет*. Черт! Это так омерзительно.',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Это так омерзительно что я не видел это раньше. Клетка - это мой дом в котором я прожил уже 8 лет.',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Почему я вообще решил что-то поменять? Я должен был учится у своего отца, подражать ему, научиться выживать здесь.',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Здесь уютно и точка. Я должен остаться здесь.',
    },
    {
        target: 'player',
        action: () => restartGame(),
        end: true,
    }
];

const shroomieScene = [
    {
        target: 'shroomie',
        name: 'Руслан',
        text: 'Пока я сидел в клетке, у меня под носом происходило буквально это.',
    },
    {
        target: 'shroomie',
        name: 'Руслан',
        text: 'Что это за живой гриб? Это он притащил сюда лань с поверхности? Не похоже, уж слишком он глупый, может только бегать туда сюда.',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Но, похоже, он может активировать панели. Возможно это пригодится.',
    },
];

const shroomieDied = [
    {
        target: 'player',
        name: 'Руслан',
        text: 'О нет, грибочек умер. Видимо придется нажать кнопку рестарта - R или жить дальше в проклятом мире, который сами и создали.',
    },
];

const lennyScene = [
    {
        target: 'lenny',
        name: 'Ленни Н. Гриб',
        text: 'Здравствуйте, товарищ! Приветствую вас в нашем грибном социалистическом королевстве.',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'З... здрасте. А что здесь происходит? Почему вы говорящий гриб?',
    },
    {
        target: 'lenny',
        name: 'Ленни Н. Гриб',
        text: 'Как, а вы не знаете? Неужели вы не слышали грохот 5 лет назад?',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'А что-то произошло? Я думал батя подскользнулся и упал.',
    },
    {
        target: 'lenny',
        name: 'Ленни Н. Гриб',
        text: 'ЯДЕРНАЯ ВОЙНА, товарищ. Все в труху, выжили только грибы и лани.',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Во дела...',
    },
    {
        target: 'lenny',
        name: 'Ленни Н. Гриб',
        text: 'Раньше я был человеком, но меня укусил один из этих грибов и я стал таким же. Эти грибы появились после воздействия на обычные грибы радиации.',
    },
    {
        target: 'lenny',
        name: 'Ленни Н. Гриб',
        text: 'Одно радует, такими глупыми грибами легко управлять. Я сказал что они и лишайники должны быть равны в правах и они теперь подчиняются мне. Ходят на поверхность добывают мне еду.',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Подожди, тут есть путь на поверхность?',
    },
    {
        target: 'lenny',
        name: 'Ленни Н. Гриб',
        text: 'Да, прямо за мной находится лифт.',
    },
    {
        target: 'elevator',
        name: 'Руслан',
        text: 'Что-то это не очень сильно похоже на лифт.',
    },
    {
        target: 'lenny',
        name: 'Ленни Н. Гриб',
        text: 'Я уверен ты разберешься, товарищ!',
    },
    {
        target: 'lenny',
        name: 'Ленни Н. Гриб',
        text: () => global.power < 3 ? 'Вот, держи еды, я уверен ты проголодался, а с разумным существом и поделиться не жалко.' : 'Удачи и волшебного путешествия!',
        action: () => {
            if (global.power < 3) {
                const lenny = findNearest('lenny');
                instanceCreate('food', lenny.x + 16, lenny.y + 16);
            }
        }
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Спасибо вождь! *Не знаю почему мне захотелось это сказать*',
    }
];

const elevatorScene = [
    {
        target: 'player',
        name: 'Руслан',
        text: 'Что ж, это было... интересно.',
    },
    {
        target: 'player',
        name: 'Руслан',
        text: 'Чувствую выход уже близко, но стоит ли мне идти дальше, если на поверхности никого нет?',
    }
];

const caveScene = [
    {
        target: 'player',
        name: 'Руслан',
        text: 'Твою ж. Те безмозглые грибы точно как-то через это все сами пробираются к поверхности?',
    },
];

const finalDialog = [
    {
        target: 'player',
        text: 'Ты выбрал этот путь и прошел его до конца. Прошел его не поддаваясь своим искушениям, хоть и так сильно их жаждал.',
        center: true,
    },
    {
        target: 'player',
        text: 'Ты сам осовободил себя от оков своего наследия.',
        center: true,
        action: () => {
            __instances.filter(obj => obj.name === 'link').forEach(link => {
                link?.disappear();
            });
        }
    },
    {
        target: 'player',
        text: 'Теперь ты свободный шагаешь в новый мир, готовый на поиск выживших людей и восстановление мира, разрушенного кровожадными, падкими до власти людьми.',
        center: true,
    },
    {
        target: 'player',
        action: () => restartGame(),
        end: true,
    }
];

const finalNeutralDialog = [
    {
        target: 'player',
        text: 'Ты выбрал этот путь и прошел его до конца. Хоть на пути и поддался искушению.',
        center: true,
    },
    {
        target: 'player',
        text: 'Ты скован этими оковами навсегда и ни один топор не разрубит эту толстую цепь пропитанную кровью и твоим сомнением.',
        center: true,
    },
    {
        target: 'player',
        text: 'Теперь ты шагаешь в выжженый мир с грузом своего наследия, в надежде на лучшее.',
        center: true,
    },
    {
        target: 'player',
        action: () => restartGame(),
        end: true,
    }
];

const exitScene = [
    {
        target: 'player',
        text: 'Я вижу свет, но почему он так высоко? Неужели я не смогу отсюда выбраться?',
        center: true,
    },
    {
        target: 'player',
        text: 'Погодите, эта стена впереди выглядит достаточно хрупкой. А что если?',
        center: true,
    },
]