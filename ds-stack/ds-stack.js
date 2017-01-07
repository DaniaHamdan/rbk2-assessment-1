
 var Stack = function() {
  var stackMethods = {};
  var arr = [];
  stackMethods.add = function(value) {
  	arr.push(value)
  	return arr;
  };
 stackMethods.remove = function() {
  	arr.pop()
  	return arr
  };
  return stackMethod
};

