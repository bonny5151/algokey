mn = require("algosdk/dist/cjs/mnemonic/mnemonic.js")
english1 = require("algosdk/dist/cjs/mnemonic/wordlists/english").default
function g() {

console.log("K")
}
 function m(f) {

var words = f.split(' ');
var morerandombits = words.length == 11 ? 128 : (words.length==23 ? 8: 0) 
if(words.length % 2 >0){ words.push(english1[Math.floor(Math.random() * morerandombits)]);}
  
 const uint11Array = words.map((word) => english1.indexOf(word));
var uint8Array = mn.toUint8Array(uint11Array);
uint8Array = uint8Array.slice(0, uint8Array.length - 1);
const cs = mn.computeChecksum(uint8Array);
words.push(cs)
console.log(cs)
return words.join(" ")

}

module.exports = { m: m, words: english1, mn: mn}
