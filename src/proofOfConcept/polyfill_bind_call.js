/* eslint-disable */
// write polyfill for bind function
Function.prototype.myBind = function (...args) { return () => this.call(...args) }

// write polyfill for call function 
Function.prototype.myCall = function(obj,...args){
	obj.func = this; // 'this' is Pointing to caller function.
	if(typeof this !== 'function'){
		throw new Error('The caller function is not callable.. please check..!!');
	}
	if(typeof obj !== 'object'){
		throw new Error('first parameter of call function has to be object');
	}
	return obj.func(...args);
}

function doSomething(place){
    return this.name + ' loves ' + this.activity + 'at : ' + place
}

doSomething.myBind({ name: 'Hussain', activity: 'skiing' }, 'Auli')();
doSomething.myCall({ name: 'Hussain', activity: 'skiing' }, 'Switzerland');