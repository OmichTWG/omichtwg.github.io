const angleByDirection = (direction) => {
    const reverse = direction.x < 0 ? 180 : 0;
    return reverse + Math.atan(direction.y / direction.x) / Math.PI * 180;
}