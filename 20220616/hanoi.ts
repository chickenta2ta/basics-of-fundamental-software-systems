function hanoi(n: number, a: string, b: string, c: string): void {
  if (n >= 1) {
    hanoi(n - 1, a, c, b);
    console.log(`move ${n}: ${a} --> ${c}`);
    hanoi(n - 1, b, a, c);
  }
}

hanoi(4, 'A', 'B', 'C');
