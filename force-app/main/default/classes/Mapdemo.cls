public class Mapdemo {
    
    public void getName(){
        Map<String, String> nm = new Map<String, String>();
        nm.put('Name 1', 'Rahul');
        nm.put('Name 2', 'Mukul');
        nm.put('Name 3', 'Ravi');
        system.debug(nm);
        set<string> n = nm.keyset();
        for(string name : n){
            system.debug(nm.get(name));
        }
            
    }

}