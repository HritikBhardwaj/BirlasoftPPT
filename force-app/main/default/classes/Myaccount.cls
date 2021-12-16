public class Myaccount {

public pageReference doSave(){
    upsert act;
    return new pageReference('https://www.google.co.in/');
}    
Account act;
public Myaccount(){
    id i = apexpages.currentpage().getparameters().get('id');
    if(i == null){
        act = new Account();
    }else{

    act = [select id, name from account where id =: i];
}
}

public Account getMyaccount() {
return act;
}
}