@restResource(urlMapping='/PostMerchandise/*')
    global class PostMerchandise {
    @httpPost
        global static void insertMerchandise(string nm) {
        Merchandise__c mer = new Merchandise__c();
            mer.name=nm;
            insert mer;
        }
    }