define([ "sandbox" ], function (sandbox) {

    function Facade(name) {
        var prefix = "[" + name.toUpperCase() + "-SPECIFIC] ";

        this.log = function (s) {
            console.log(prefix + s);
        };
    }

    Facade.prototype = sandbox; // Get lazy

    var modules = [ "a", "b" ];

    modules.forEach(function (name) {
        // Define new context
        var req = requirejs.config({
            context: "context_" + name
        });

        // Will be defined in the context
        define("sandbox", new Facade(name));

        // Load the module within context
        req([ name ], function (module) {
            module.initialize();
        });
    });
});
