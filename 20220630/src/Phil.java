import java.util.Random;

class Phil implements Runnable {
    String name;
    Fork left, right;
    Random random;

    public Phil(String name, Fork l, Fork r) {
        this.name = name;
        this.left = l;
        this.right = r;
        this.random = new Random();
    }

    public void rsleep(int m) {
        try {
            Thread.sleep(random.nextInt(m));
        } catch (Exception ex) {
        }
    }

    public void run() {
        while (true) {
            rsleep(1500);
            left.pick(this);
            System.out.println("" + this.name + " picked left fork " + left.name);
            rsleep(1000);
            right.pick(this);
            System.out.println("" + this.name + " picked right fork " + right.name);
            rsleep(1000);
            System.out.println("" + this.name + " drops right fork " + right.name);
            right.drop(this);
            System.out.println("" + this.name + " drops left fork " + left.name);
            left.drop(this);
        }
    }

    public synchronized String toString() {
        return "" + ((left.owner == this) ? "*-" : "-") + name
                + ((right.owner == this) ? "-*" : "-");
    }

    public static void main(String argv[]) {
        Fork[] fork = new Fork[5];
        Phil[] phil = new Phil[5];

        fork[0] = new Fork("0");
        fork[1] = new Fork("1");
        fork[2] = new Fork("2");
        fork[3] = new Fork("3");
        fork[4] = new Fork("4");

        phil[0] = new Phil("A", fork[0], fork[1]);
        phil[1] = new Phil("B", fork[1], fork[2]);
        phil[2] = new Phil("C", fork[2], fork[3]);
        phil[3] = new Phil("D", fork[3], fork[4]);
        phil[4] = new Phil("E", fork[4], fork[0]);

        for (int i = 0; i < 5; i++) {
            Thread th = new Thread(phil[i]);
            th.start();
        }

        Thread t2 = new Thread(new Runnable() {
            public void run() {
                while (true) {
                    String s = "";
                    for (int i = 0; i < phil.length; i++) {
                        s += phil[i].toString();
                        s += " ";
                    }
                    System.out.println(s);
                    try {
                        Thread.sleep(1000);
                    } catch (Exception ex) {
                    }
                }
            }
        });

        t2.start();

    }
}
