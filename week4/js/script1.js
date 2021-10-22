(function (window) {
    var greeter1 = {};
    greeter1.name = "Tarek";
    greeter1.sayHello = function() {
        console.log("Hello " + greeter1.name);
    }
    window.greeter1 = greeter1;
})(window);