public class ListDuplicate {
    public void checkduplicate(){
        List<string> cdu = new List<string>();
        cdu.add('Ankur');
        cdu.add('ravi');
        cdu.add('kishan');
        cdu.add('kishan');
        Set<String> nw = new Set<String>(cdu);
        system.debug(nw);
        }
        
    }