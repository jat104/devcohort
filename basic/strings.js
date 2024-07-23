// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

//length
function getLength(str) {
    console.log("Orignal String:", str);
    console.log("Length:", str.length);
}
getLength("Hi there");

// indexOf
function findIndexOf(str, target) {
    console.log("Orignal String:", str);
    console.log("Index:", str.indexOf(target));
}
findIndexOf("Hi there", "there");

// lastIndexOf
function findLastIndexOf(str, target) {
    console.log("Orignal String:", str);
    console.log("Index:", str.lastIndexOf(target));
}
findIndexOf("Hi there bro", "bro");

//slice
function getSlice(str, start, end){
    console.log("Orignal String:", str);
    console.log("After slice:", str.slice(start, end));
}
getSlice("Hi there bro", 0, 8);

//substring
function getSubstring(str, start, end) {
    console.log("Orignal string:", str);
    console.log("After substring:", str.substring(start, end));
}
getSubstring("Hi there bro", 0, 8);

//replace
function replaceString(str, target, replacement){
    console.log("Orignal string:", str);
    console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

//split
function splitString(str, seperator){
    console.log("Orignal string:", str);
    console.log("After split:", str.split(seperator));
}
splitString("Hi there bro"," ");

//trim
function trimString(str) {
    console.log("Orignal string:", str);
    console.log("After trim:", str.trim());
}
trimString(" Hi there bro ");

//toUpperCase
function toUpperCase(str) {
    console.log("Orignal string:", str);
    console.log("After toUpperCase:", str.toUpperCase());
}
toUpperCase("hi there bro");

//toLowerCase
function toLowerCase(str) {
    console.log("Orignal string:", str);
    console.log("After toLowerCase:", str.toLowerCase());
}
toLowerCase("HI THERE BRO");