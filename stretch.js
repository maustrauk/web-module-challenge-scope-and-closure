(function(){
    var a = b = 3;
  })();

  console.log("a defined? " + (typeof a !== 'undefined'));//a is undefined, because it try to put variable b (that didn't defined yet) in a.
  console.log("b defined? " + (typeof b !== 'undefined'));//b is defined as 3.