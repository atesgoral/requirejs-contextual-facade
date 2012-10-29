define([ "common", "sandbox" ], function (common, sandbox) {

    function Facade(name) {
        var prefix = "[" + name.toUpperCase() + "-SPECIFIC] ";

        this.log = function (s) {
            console.log(prefix + s);
        };
    }

    Facade.prototype = sandbox; // Get lazy

    console.log("[MAIN] Common: " + common.getInstance());

    var modules = [ "a", "b" ];

    modules.forEach(function (name) {
        var sandboxName = "sandbox$" + name,
            map = {};

        define(sandboxName, new Facade(name));

        map[name] = {
            sandbox: sandboxName
        };

        var req = requirejs.config({
            context: "module",
            map: map
        });

        req([ name ], function (module) {
            module.initialize();
        });
    });
});
