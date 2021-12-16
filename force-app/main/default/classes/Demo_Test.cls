@isTest
private class Demo_Test{
static Account act;
@testSetup static void setupData() {
    act = new Account();
    act.name = 'my name';
    insert act;
}

    public static testmethod void doTest() {
    Demo d = new Demo();
    d.sayhello();
    integer r = d.add(10,30);
    system.assertEquals(r,40);
    act = [select name from account where name = 'my name'];
    d.updateAccount(act);
    }
}