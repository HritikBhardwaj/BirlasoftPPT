public class SoqlDemo {
    
    public void getAccount(){
        List<Account> act = [select ID, Name from account];
        for(Account a: act){
            system.debug('Account ID:-' +a.ID + 'Acc Name:-' +a.Name);
        }
    }

}