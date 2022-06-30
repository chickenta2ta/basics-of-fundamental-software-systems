var Tree = /** @class */ (function () {
    function Tree() {
        this.tree = [];
    }
    Tree.prototype.add = function (d) {
        this.tree.push(d);
    };
    Tree.prototype.remove = function (i) {
        this.tree.splice(i - 1, 1);
    };
    Tree.prototype.print = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.end, end = _c === void 0 ? '\n' : _c;
        process.stdout.write('( ');
        for (var _i = 0, _d = this.tree; _i < _d.length; _i++) {
            var x = _d[_i];
            if (x instanceof Tree) {
                x.print({ end: ' ' });
            }
            else {
                process.stdout.write(x + ' ');
            }
        }
        process.stdout.write(') ' + end);
    };
    return Tree;
}());
var t1 = new Tree();
t1.add(1);
t1.add(2);
t1.print();
var t2 = new Tree();
t2.add(3);
t2.add(4);
t2.print();
t1.add(t2);
t1.print();
t1.remove(1);
t1.print();
