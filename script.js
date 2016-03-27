// links to cover
// https://davidwalsh.name/essential-javascript-functions

// Object 
var obj = {
    funct: function () {
        console.log("the object function has been called");
    },
    inobj: {
        inOne: "inOne object has been called"
    },
    normal: "bla",
    scope: function () {
        return this;
    }
}

// Array
var arr = [["one", "onetwo"], ["two"]];
// arr[0][0]


// hoisting
var i = "test";
function hoisting() {
    console.log(i);
    var i;
}

// Changing the value of this for a given function 
// call, apply and binding
// Arguments to be send: Call ==> Comma seperated, Apply ==> Array 
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
 
function say(greeting) {
        console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

// call, arguments sent in a Comma seperated list
say.call(person1, 'Hello'); // Hello Jon Kuperman
say.call(person2, 'Hello'); // Hello Kelly King

// apply, arguments to be sent in an array
say.apply(person1, ['Hello']); // Hello Jon Kuperman
say.apply(person2, ['Hello']); // Hello Kelly King

// bind, creates a new function that when called, has its this 
// keyword set to the provided value
// we can a simple hello function and turn it into a hellojson or hellokelly
var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2); 
sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King

// console.log(obj.scope());
console.log(obj.scope.bind(window)());

