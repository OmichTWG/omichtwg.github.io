const globalInitial = {
    player: null,
    camera: null,
    strongman: null,

    power: 0,
    cannibalism: 0,
    chainLength: 75,

    pause: false,
    menu: false,
    modal: false,

    volume: 5,
    music: 5,

    wasStarted: false,
    wasEnded: false,
    shroomieStarted: false,

    dialogOpenerId: null,
    currentMusic: null,
    startVolume: 0.3,
    modalAccept: () => {},
    modalDecline: () => {},
    lastCp: { properties: { x: 320, y: 300 } },
}

const getGlobalInitialCopy = () => ({ ...globalInitial, lastCp: { properties: { ...globalInitial.lastCp.properties }}});

let global = getGlobalInitialCopy();

const getCurrentSpeed = () => currentRoom.name !== 'final-room' ? global.power * 0.5 : 0.5;
const getPause = () => global.pause || global.menu || global.modal;

const goToLastCp = () => {
    roomRestart();
    const props = global.lastCp.properties;
    global.player.x = props?.x ? props.x : player.x;
    global.player.y = props?.y ? props.y : player.y;
    global.strongman.x = global.player.x;
    global.strongman.y = global.player.y;
    global.camera.x = global.player.x - camera.w() / 2;
    global.camera.y = global.player.y - camera.h() / 2;
};