// Primitive types in JavaScript
var a = 12.5; // number
var b = "Hello"; // string
var c = true; // boolean
var d; // undefined
var e = undefined; // undefined
var f = null; // null
var bigNum = 123456789012345;

console.log(isNaN(bigNum)); // false, because bigNum is a valid number
console.log(isNaN(b)); // true, because b is a string and cannot be converted to a number

var str = "Hello World!"; // string
var str2 = "It's a beautiful day!"; // string
var str3 = 'She said,"Hello!"'; // string
var str4 = 'She say\'s, "Hello!"'; // string with escape characters
console.log(str.length); // length of the string

console.log(a); // 12.5
console.log(typeof(a)); // "number"
console.log(b); // "Hello"
console.log(typeof(b)); // "string"
console.log(c); // true
console.log(typeof(c)); // "boolean"
console.log(d); // undefined
console.log(typeof(d)); // "undefined"