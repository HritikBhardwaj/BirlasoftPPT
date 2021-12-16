public class Demo {
    Public void sayhello(){
        system.debug('Hello Salesforce..');
        
    }
    @testVisible
    private integer add(integer a, integer b){
        integer res = a+b;
        system.debug(res);
        return res;
    }
    public void updateAccount(Account id) {
    }
    

}