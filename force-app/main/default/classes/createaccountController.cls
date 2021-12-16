public class createaccountController {
    public static List<Account> getAccountDetails(string accountName, string phone, string stateName, string cityName, string zipcode, string countryName){
        accountName = '%' + accountName + '%';
        List<Account> accList = [SELECT ID, Name 
                                    FROM Account WHERE Name LIKE :accountName];
        System.debug('@@accList:' + accList);
        return accList;
    }
}