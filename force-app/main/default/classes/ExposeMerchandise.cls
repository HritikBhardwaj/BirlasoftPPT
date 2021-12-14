@restResource(urlMapping = '/myMerchandise/*')
global class ExposeMerchandise{
    @httpGet
    global static List<Merchandise__c>
    getAllMerchandise()
    {
    List<Merchandise__c> mer = [select id, name from Merchandise__c];
    return mer;
    }

}