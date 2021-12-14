public class ExceptionD {
    
    public void getdivide(integer a, integer b){
        try{
            integer res = a-b;
        system.debug('Result is' +res);
        }
        catch(MathException me){
            system.debug('Please use valid value');
            
        }
        catch(Exception e){
            system.debug(e);
            system.debug('server is busy');
        }
        finally{
            system.debug('Its done finally');
        }
    } 

}