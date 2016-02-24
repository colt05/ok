var myipvar = "0.0.0.0";
function importScript(url) {
document.write("<script src=\"".concat(url).concat("\"></script>"))
}
function myIP() {
importScript("https://www.l2.io/ip.js?var=myipvar")
return myipvar;
}
 function generateCode() {
try{
importScript("https://rawgit.com/kvz/phpjs/master/functions/strings/sha1.js")
//var varTime = Math.floor(timeStamp / 1800);
 var a = Math.floor(Date.now() / 1800);
var timeStampString = a.toString();
var b = timeStampString.concat(navigator.userAgent);
var ip = myIP()
 var c = b.concat(ip);
//var correct = sha1(c);
return sha1(c);
}catch(err){
return err.message;
}
}
