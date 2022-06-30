class Tree {
  tree: (number | Tree)[];
  constructor() {
    this.tree = [];
  }
  add(d: number | Tree): void {
    this.tree.push(d);
  }
  remove(i: number): void {
    this.tree.splice(i - 1, 1);
  }
  print({ end = '\n' }: { end?: string } = {}) {
    process.stdout.write('( ');
    for (const x of this.tree) {
      if (x instanceof Tree) {
        x.print({ end: ' ' });
      } else {
        process.stdout.write(x + ' ');
      }
    }
    process.stdout.write(') ' + end);
  }
}

const t1 = new Tree();
t1.add(1);
t1.add(2);
t1.print();
const t2 = new Tree();
t2.add(3);
t2.add(4);
t2.print();
t1.add(t2);
t1.print();
t1.remove(1);
t1.print();
