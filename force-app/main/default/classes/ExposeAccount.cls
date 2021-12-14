@restResource(urlMapping = '/myAccount/*')
global class ExposeAccount{
    @httpGet
    global static List<Account> getAllAccounts() {
        List<Account> act = [select id, name from account];
        return act;
    }
    @httpPost
    global static void insertAccount(string nm) {
    
        Account act = new Account();
        act.name = nm;
        insert act;
    }

}