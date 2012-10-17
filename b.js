define([ "sandbox", "common" ], function (sandbox, common) {
    return {
        initialize: function () {
            sandbox.log("Initializing B"); // Module-specific method on façade
            sandbox.broadcast("B is here!"); // Shared method on façade
            common.beep();
        }
    };
});
