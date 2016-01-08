module.exports.json = function(){
    return {
        inbound: function(message, next){
            message.data = JSON.parse(message.data.toString());
            next();
        },
        outbound: function(message, next){
            message.data = new Buffer(JSON.stringify(message.data));
            next();
        }
    }
}

//implement zlib
module.exports.zlib = function(){
    return {
        inbound: function(message, next){
            //normally decompress logic would be here
            message.data = message.data;
            next();
        },
        outbound:function(message, next) {
            //normally compress logic would be here
            message.data = message.data;
            next();
        } 
    }
}