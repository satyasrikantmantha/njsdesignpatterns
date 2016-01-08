var util = require("util");
var ini = require("ini");
var ConfigTemplate = require("./Configtemplate");

function IniConfig(){
    util.inherits(IniConfig, ConfigTemplate);
}

IniConfig.prototype._deserialize = function(data){
    return ini.parse(data);
}

IniConfig.prototype._serialize = function(data){
    return ini.stringify(data);
}

module.exports = IniConfig;
