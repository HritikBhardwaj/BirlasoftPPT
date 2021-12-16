public class SoqlParent {
    public void getdetails(){
        List<Contact> cnt = [select id, name, account.name from contact];
        for(Contact c : cnt){
            
            system.debug('Contact ID = ' +c.id + 'Contact Name = ' +c.name + 'Account name = ' +c.account.name);
            
        }
    }

}