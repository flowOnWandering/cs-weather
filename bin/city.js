#!/usr/bin/env node

function getCity(o) {
    console.log("您好，您现在所在的位置为" + o)
}
var $ = require("http");
$.get("http://api.jirengu.com/city.php", function(o) {
    var n = "";
    o.on("data", function(o) {
        n += o
    }), o.on("end", function() {
        getCity(n)
    }), o.resume()
}).on("error", function(o) {
    console.log("Got error:" + o.message)
});