// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

//push()
function pushExample(arr, element) {
    console.log("Orignal Array:", arr);
    arr.push(element);
    console.log("After Push:", arr);
}
pushExample([5,8,7],6);

//pop()
function popExample(arr) {
    console.log("Origanl Array:", arr);
    arr.pop();
    console.log("After pop:", arr);
}
popExample([324, 54, 567]);

//shift()
function shiftExample(arr) {
    console.log("Orignal Array:", arr);
    arr.shift();
    console.log("After Shift:", arr);
}
shiftExample([4,7,6,8,9]);

//unshift()
function unshiftExample(arr, element) {
    console.log("Orignal Array:", arr);
    arr.unshift(element);
    console.log("After Unshift:", arr);
}
unshiftExample([4, 5, 6], 10);

//concat()
function concatExample(arr1, arr2) {
    console.log("Orignal Array:", arr1, arr2)
    let arr3 = arr1.concat(arr2);
    console.log("After concat:", arr3);
}
concatExample([3,5,7], [8,9,10]);

//forEach()
function forEachExample(arr) {
    console.log("Orignal Array:", arr);
    arr.forEach(function(item, index){
        console.log(item, index);
    })
}
forEachExample([48, 6, 9]);

//map()
function mapExample(arr) {
    console.log("Orignal Array:", arr);
    let newAr = arr.map(function(item){
        return item * 2;
    });
    console.log("After map:", newAr);
}
mapExample([6,7,8]);

//filter()
function filterExample(arr) {
    console.log("Origanl Array:", arr);
    let newAr = arr.filter(function(item){
        return item > 3;
    });
    console.log("After filter:", newAr);
}
filterExample([1,2,3,4,5,6,7]);

//find() = this funciton give the value of the first element that passes the test
function findExample(arr) {
    console.log("Orignal Array:", arr);
    let found = arr.find(function(item){
        return item > 9;
    });
    console.log("After find:", found);
}
findExample([3,4,56,7,8,9,23]);

//sort()
function sortExample(arr) {
    console.log("Orignal Array:", arr);
     arr.sort();
    console.log("After sort:", arr);
}
sortExample([5,2,3,4,1]);