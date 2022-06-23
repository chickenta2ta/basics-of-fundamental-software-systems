function hanoi(n, a, b, c) {
    if (n >= 1) {
        hanoi(n - 1, a, c, b);
        console.log("move ".concat(n, ": ").concat(a, " --> ").concat(c));
        hanoi(n - 1, b, a, c);
    }
}
hanoi(4, 'A', 'B', 'C');
