function tarai(x, y, z) {
    if (x <= y) {
        return y;
    }
    else {
        return tarai(tarai(x - 1, y, z), tarai(y - 1, z, x), tarai(z - 1, x, y));
    }
}
var startTime = performance.now();
tarai(13, 5, 0);
var endTime = performance.now();
console.log(endTime - startTime);
