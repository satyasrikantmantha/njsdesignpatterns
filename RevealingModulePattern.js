var module = (function(){
    var privateFoo = function(){ console.log('Private Function')};
    var privateVar = [];
    
    var exports = {
        publicFoo: function() {},
        publicBar: function() {}
    };
    
    return exports;
})();