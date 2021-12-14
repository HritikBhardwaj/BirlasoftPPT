public class MyListexceptionAsigt {
	
    public void checklistexception(){
        try{
            list<Employee__c> emp = [select id,name from Employee__c limit 10];
            emp[0].name = 'Hritik updated !';
                update emp; 
            system.debug(emp);
            demo d ;
            d.sayHello();
             
        }
        catch(ListException le){
            system.debug(le);
            system.debug('Here is list exception');
        }
        catch(NullPointerException ne){
            system.debug('null');
        }
        catch(exception e){
            system.debug(e);
            
        }
        
    }
}