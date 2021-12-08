public with sharing class createLogger {
    @AuraEnabled
    public static void createLogger(string errMsg) {
 
        Logger__c log = new Logger__c();
        log.Name = 'createnewaccountform log';
        log.Method_Name__c ='handleError';
        log.Error_Message__c = errMsg;
        insert log;
 
    }
}