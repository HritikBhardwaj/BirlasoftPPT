public class ConsumeRest {
    public void setData() {
        
        Http h = new http();
        HttpRequest req = new HttpRequest();
        req.setHeader('Content-Type', 'application/json');
        req.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals');
        req.setMethod('POST');
        req.setBody('{"name":"my tiger"}');
        HttpResponse res = h.send(req);
        system.debug(res.getStatusCode());
        system.debug(res.getBody());
    }

}