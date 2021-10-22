// var greeter2 = {};
// greeter2.name = "Tarek";
// greeter2.sayHi = function() {
//     console.log("Hi " + greeter2.name);
// }

//for last segment
(function (window) {
    var greeter2 = {};
    greeter2.name = "Tarek";
    greeter2.sayHi = function() {
        console.log("Hi " + greeter2.name);
    }
    window.greeter2 = greeter2;
})(window);