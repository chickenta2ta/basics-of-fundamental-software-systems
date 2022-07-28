class Fork {
    String name;
    Phil owner = null;

    public Fork(String name) {
        this.name = name;
    }

    public synchronized void pick(Phil me) {
        while (owner != null) {
            try {
                this.wait();
            } catch (Exception ex) {
                System.out.println(ex);
            }
        }
        owner = me;
    }

    public synchronized void drop(Phil me) {
        if (owner == me) {
            owner = null;
            this.notify();
        }
    }
}
