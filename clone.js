var fs = require('fs');
var path = require('path');
var asyncfg = require('asyncFlowGenerator');

asyncfg.asyncFlow(function* (callback){
    var fileName = path.basename(__filename);
    var myself  = yield fs.readFile(fileName, 'utf-8', callback);
    
    yield fs.writeFile('clone_of' + fileName, myself, callback);
    console.log('Clone created');
});