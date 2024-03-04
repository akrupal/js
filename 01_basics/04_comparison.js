//always compare 2 same datatypes
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//the last one comes true because equality and comparison checks work differently
// comparison converts null to a number treating it as 0
// === srtict check checks the value as well as datatype

