var Array=function(arr){
	var arrObj={};
	arrObj.arr=arr;
	_.extend(arrObj,usefulFunctions);
	return arrObj
}
var usefulFunctions={};
usefulFunctions.first=function(){
	return this.arr[0]
};
usefulFunctions.last=function(){
	return this.arr[this.arr.length-1]
}
