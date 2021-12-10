public class AccountClass {

    public static void insertAccountArch(list<Account> acc)
    {
        Account_Arch__c ar;
        for(Account a: acc)
        {
            ar= new Account_Arch__c();
            ar.name = a.name;
            insert ar;
        }
    }
    
}