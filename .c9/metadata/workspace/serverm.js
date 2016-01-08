{"filter":false,"title":"serverm.js","tooltip":"/serverm.js","undoManager":{"mark":7,"position":7,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":4,"column":39},"action":"insert","lines":["var request = require('request');","var fs = require('fs');","var mkdirp = require('mkdirp');","var path = require('path');","var utilities = require('./utilities');"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":39},"end":{"row":5,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":0},"end":{"row":35,"column":1},"action":"insert","lines":["function spider(url, callback) {"," var filename = utilities.urlToFilename(url);"," fs.exists(filename, function(exists) { //[1]"," if(!exists) {"," console.log(\"Downloading \" + url);"," request(url, function(err, response, body) { //[2]"," if(err) {"," callback(err);"," } else {"," mkdirp(path.dirname(filename), function(err) { //[3]"," if(err) {"," callback(err);"," } else {"," fs.writeFile(filename, body, function(err) { //[4]"," if(err) {"," callback(err);"," } else {"," callback(null, filename, true);"," }"," });"," }"," });"," }"," });"," } else {"," callback(null, filename, false);"," }"," });","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":1},"end":{"row":36,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":0},"end":{"row":37,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":0},"end":{"row":45,"column":3},"action":"insert","lines":["spider(process.argv[2], function(err, filename, downloaded) {"," if(err) {"," console.log(err);"," } else if(downloaded){"," console.log('Completed the download of \"'+ filename +'\"');"," } else {"," console.log('\"'+ filename +'\" was already downloaded');"," }","});"]}]}]]},"ace":{"folds":[],"scrolltop":88,"scrollleft":0,"selection":{"start":{"row":22,"column":15},"end":{"row":22,"column":15},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":5,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1426555759981,"hash":"1c6dac213565b6b9271481b4e00bfc1928df2a9c"}