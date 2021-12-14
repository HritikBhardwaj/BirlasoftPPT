public class BirlasoftEmployee {
    
    @AuraEnabled
    public static void insertBslEmp(string enm, string efnm, string eadr, string edept, integer esalary) {
        
        BirlasoftEmployee__c Bempl = new BirlasoftEmployee__c();
        Bempl.name = enm;
        Bempl.Father_Name__c = efnm;
        Bempl.EmpAddress__c = eadr;
        Bempl.Emp_Departement__c = edept;
        Bempl.Emp_Salary__c = esalary;
        insert Bempl;
    }

}