function tarai(x: number, y: number, z: number): number {
  if (x <= y) {
    return y;
  } else {
    return tarai(tarai(x - 1, y, z), tarai(y - 1, z, x), tarai(z - 1, x, y));
  }
}

const startTime: DOMHighResTimeStamp = performance.now();
tarai(13, 5, 0);
const endTime: DOMHighResTimeStamp = performance.now();

console.log(endTime - startTime);
