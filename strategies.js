var ini = require("ini");

//JSON Strategy
module.exports.json = {
    deserialize : function(data){
        return JSON.parse(data);
    },
    serialize : function(data){
        return JSON.stringify(data, null, ' ');
    }
}

//INI strategy
module.exports.ini = {
    deserialize : function(data){
        return ini.parse(data);
    },
    serialize : function(data){
        return ini.stringify(data);
    }
}