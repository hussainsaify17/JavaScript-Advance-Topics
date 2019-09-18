var obj = {
	s: 2,
    normalfunction_this: function(){
        console.log(this);
    },
    anonymousfunction_this:()=>{
        console.log(this);
    },
	normalfunction: function(){
		console.log(this.s); 
	},
	anonymousfunction:()=>{
		console.log(this.s);
    }
}

obj.normalfunction_this() // Output : Object with all properties
obj.anonymousfunction_this() // Output : window object
obj.normalfunction() // Output : 2
obj.anonymousfunction() // Output : undefined why ?

function function1(){
	this.s= 2;
    this.normalfunction_this= function(){
        console.log(this);
    };
    this.anonymousfunction_this=()=>{
        console.log(this);
    };
	this.normalfunction= function(){
		console.log(this.s);
	};
	this.anonymousfunction=()=>{
		console.log(this.s);
    };
}

var _inst = new function1();
_inst.normalfunction_this()// Output : Object with all properties
_inst.anonymousfunction_this();// Output : Object with all properties
_inst.normalfunction();// Output : 2
_inst.anonymousfunction();// Output : 2