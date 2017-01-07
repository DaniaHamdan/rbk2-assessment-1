
 var Stack = function() {
  var stackMethod = {};
  var storage = [];
  stackMethod.add = function(value) {
  	storage.push(value)
  	return storage;
  };
 stackMethod.remove = function() {
  	storage.pop()
  	return storage
  };
  return stackMethod
};

