if (typeof require!= "undefined") {
    
    require.config({
        paths: {
            "stdconstruct": '../JSYG.StdConstruct',
            "jquery":"../bower_components/jquery/dist/jquery",
            "jsyg-wrapper":"../bower_components/jsyg-wrapper/JSYG-wrapper",
            "jsyg-events":"../bower_components/jsyg-events/JSYG.Events"
        },
        urlArgs: "bust=" + (+new Date())
    });
}

(function(factory) {
    
    if (typeof define == 'function' && define.amd) define(["stdconstruct"],factory);
    else factory(StdConstruct);
    
}(function(StdConstruct) {

    module("StdConstruct");

    test("Gestion des fonction standard", function() {     
        
        
        var obj = new StdConstruct();
        
        obj.enable();
        
        expect(2);
        
        equal(obj.enabled, true, "activation du plugin");
        
        equal(typeof obj.on, "function", "héritage de Events");
    });
    
}));
