(function(){
    var a = b = 3;
  })();

  console.log("a defined? " + (typeof a !== 'undefined'));//a is undefined, because it try to put variable b (that didn't defined yet) in a.
  console.log("b defined? " + (typeof b !== 'undefined'));//b is defined as 3.



function createBase(x) {
    return function (y) {
        return x + y;
    }
}

var addSix = createBase(6);

console.log(addSix(10));//16
console.log(addSix(21));//27