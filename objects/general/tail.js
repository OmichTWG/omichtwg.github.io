addObject({
    name: 'tail',
    from: null,
    to: null,
    depth: -1,
    colorRGB: '0, 0, 0',
    step() {
        this.opacity -= 0.1;
        if (this.opacity <= 0) {
            instanceDestroy(this);
        }
    },
    draw() {
        setDrawColor(`rgba(${this.colorRGB}, ${this.opacity})`);
        setLineWidth(this.opacity * 3 + 0.1);
        drawLine(this.from.x - camera.x, this.from.y - camera.y, this.to.x - camera.x, this.to.y - camera.y);
    }
});