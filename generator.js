var myipvar = "0.0.0.0";
function importScript(url) {
var script = document.createElement('script');
script.src = url;
document.getElementsByTagName('script')[0].parentNode.appendChild(script);
}
function myIP() {
importScript("https://www.l2.io/ip.js?var=myipvar")
return myipvar;
}
 function generateCode(variable) {
try{
importScript("https://rawgit.com/kvz/phpjs/master/functions/strings/sha1.js")
//var varTime = Math.floor(timeStamp / 1800);
 var a = Math.floor(Date.now() / 1800);
var timeStampString = a.toString();
var b = timeStampString.concat(navigator.userAgent);
var ip = myIP()
 var c = b.concat(ip);
//var correct = sha1(c);
document.write(variable.concat(" = ".concat(sha1(c).concat(";"))))
}catch(err){
document.write(0);
}
}
