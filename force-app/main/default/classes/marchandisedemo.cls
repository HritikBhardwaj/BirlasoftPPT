public class marchandisedemo {
    public void getallmerchandise(){
        List<Merchandise__c> mer = [select name from Merchandise__c];
        for(Merchandise__c m : mer){
            system.debug('Name = ' +m.name);
            
        }
        
    }

}