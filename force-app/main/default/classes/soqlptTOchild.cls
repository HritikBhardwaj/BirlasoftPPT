public class soqlptTOchild {
    
    public void getdetails(){
        
       List<account> act = [select id, name,(select id, name from contacts) from account];
        for(Account accobj : act){
            for(contact cont : accobj.contacts){
                system.debug(cont);
            }
        }
       
    }

}