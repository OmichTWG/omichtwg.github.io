addObject({
    name: 'mountain',
    sprite: sprites.get('mountain'),
    tpX: 320,
    tpY: 420,
    depth: 600,
    opacity: 0.5,
    coords: null,
    camera: null,
    create() {
        this.coords = {
            x: this.x,
            y: this.y,
        }
        this.camera = {
            x: camera.x,
            y: camera.y,
        }
    },
    step() {
        this.x = this.coords.x + (camera.x - this.camera.x) / 5;
        this.y = this.coords.y + (camera.y - this.camera.y) / 5;
    }
});