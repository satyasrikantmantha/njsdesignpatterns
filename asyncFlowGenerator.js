function asyncFlow(generatorFunction){
    function callback(err){
        if(err){
            return generator.throw(err);
        }
        
        var results = [].slice.call(arguments, 1);
        generator.next(results.length > 1 ? results: results[0]);
    };
    
    var generator = generatorFunction(callback);
    generator.next();
}