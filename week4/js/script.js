//*****For segment 1
// var message = "in global";
// console.log("global: message = " + message);

// var a = function () {
//     var message = "inside a";
//     console.log("a: message = " + message);

//     function b () {
//         console.log("b: message = " + message);
//     }

//     b();
// }

// // function b () {
// //     console.log("b: message = " + message);
// // }

// a();



//*****For segment 2.1
// var x;
// console.log(x);

// if(x == undefined) {
//     console.log("x is undefined");
// }

// x = 5;
// if (x == undefined) {
//     console.log("x is undefined");
// }
// else {
//     console.log("x has been defined");
// }



//*****For segment 2.2
// var string = "Hello";
// string += " World";
// console.log(string + "!");

// //Math operators
// console.log(undefined / 5);
// function test1(a) {
//     console.log(a/5);
// }
// test1();

// //Equality
// var x=4, y=4;
// if(x==y) {
//     console.log("x=y");
// }

// x="4";
// if(x==y) {
//     console.log("x=y");
// }

// //Strict Equality
// if(x === y) {
//     console.log("x=y");
// }
// else {
//     console.log("x!=y");
// }



//For Segment 2.3
// if (false || null || undefined || "" || 0 || NaN) {
//     console.log("This line won't ever execute");
// }
// else {
//     console.log("All false");
// }

// if (true && "hello" && 1 && -1 && "false") {
//     console.log("All true");
// }



//For Segment 2.4
// var sum = 0;
// for (var i = 0; i<10; i++) {
//     sum += i;
// }
// console.log("Sum = " + sum);



//For Segment 2.5
// function orderChickenWith(sideDish) {
//     sideDish = sideDish || "whatever!";
//     console.log("Chicken with " + sideDish);
// }

// orderChickenWith();



//For Segment 3.1
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("company CEO name is: " + company.ceo.firstName);

// company["Stock of company"] = 110;
// console.log("Stock price is: " + company["Stock of company"];



//For Segment 3.2 (Object Literal)
// var facebook = {
//     name: "Facebook",
//     cse: {
//         firstName: "Mark",
//         favColor: "blue"
//     },
//     "Stock of company": 110
// };

// console.log(facebook);



//For Segment 3.3
// function multiply(x,y) {
//     return x*y;
// }
// console.log(multiply(3,5));
// multiply.version = "v.1.0.0";
// console.log(multiply);
// console.log(multiply.version);

// function makeMultiplier(multiplier) {
//     var myFunc = function (x) {
//         return multiplier * x;
//     };

//     return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));

// //Passing functions as arguments
// function doOperationOn(x, operation) {
//     return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);



//For segment 3.5
// function changePrimitive(primValue) {
//     console.log("in changePrimitive...");
//     console.log("before:");
//     console.log(primValue);

//     primValue = 5;
//     console.log("after:");
//     console.log(primValue);
// }

// var value = 7;
// changePrimitive(value);
// console.log("after changePrimitive, orig value:");
// console.log(value);

// function changeObject(objValue) {
//     console.log("in changeObject...");
//     console.log("before:");
//     console.log(objValue);

//     objValue.x = 5;
//     console.log("after:");
//     console.log(objValue);
// }

// value = {x:7};
// changeObject(value);
// console.log("after changeObject, orig value:");
// console.log(value);



//For segment 3.6
//Function constructors
// function Circle (radius) {
//     this.radius = radius;

//     this.getArea = function () {
//         return Math.PI * Math.pow(this.radius, 2);
//     };
// }

// var myCircle = new Circle(10);
// console.log(myCircle.getArea());

//Prototype
// function Circle (radius) {
//     this.radius = radius;
// }
// Circle.prototype.getArea = function () {
//     return Math.PI * Math.pow(this.radius, 2);
// }

// var myCircle = new Circle(10);
// console.log(myCircle);

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);



//For segment 3.7
// var literalCircle = {
//     radius: 10,

//     getArea: function() {
//         var self = this;
//         console.log(this);

//         var increaseRadius = function() {
//             self.radius = 20;
//         }
//         increaseRadius();
//         console.log(this.radius);

//         return Math.PI * Math.pow(this.radius, 2);
//     }
// };

// console.log(literalCircle.getArea());



//For segment 4.1
// var array = new Array();
// array[0] = "Tarek";
// array[1] = 2;
// array[2] = function (name) {
//     console.log("Hello " + name);
// };
// array[3] = {course: "HTML, CSS & JS"};

// console.log(array);
// console.log(array[1]);
// array[2](array[0]);
// console.log(array[3].course);

// //short hand array creation
// var names = ["Tarek", "Ferdous"];
// console.log(names);

// for (var i = 0; i<names.length; i++) {
//     console.log("Hello " + names[i]);
// }

// names[100] = "Jim";
// for (var i = 0; i<names.length; i++) {
//     console.log("Hello " + names[i]);
// }



//For segment 4.2
// var names2 = ["Tarek", "Ferdous", "Jim"];
// var myObj = {
//     name: "Tarek",
//     course: "HTML/CSS/JS",
//     platform: "Coursera"
// };

// for (var prop in myObj) {
//     console.log(prop + ": " + myObj[prop]);
// }

// for(var name in names2) {
//     console.log("Hello " + names2[name]);
// }

// names2.greeting = "Hi!";
// for(var name in names2) {
//     console.log("Hello " + names2[name]);
// }



//For segmnent 4.3
function makeMultiplier (multiplier) {
    function b() {
        console.log("Multiplier is: " + multiplier);
    }
    b();

    return (
        function (x) {
            return multiplier * x;
        }
    );
}
var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));