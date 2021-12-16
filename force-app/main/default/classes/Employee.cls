public class Employee {

public pageReference doSave() {
upsert emp;
return new pageReference('https://www.google.com/');
}
  Employee__c  emp;
public Employee() {
id i = apexpages.currentpage().getparameters().get('id');
if(i == null){
emp = new Employee__c();
}else{

emp = [select First_Name__c, Last_Name__c,  Address__c,  Phone_Number__c from Employee__c where  id = :i];
}
}
public Employee__c getEmployee(){
return emp;
}
}