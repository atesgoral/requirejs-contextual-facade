define([ "sandbox", "common" ], function (sandbox, common) {
    return {
        initialize: function () {
            sandbox.log("Initializing A"); // Module-specific method on façade
            sandbox.broadcast("A is here!"); // Shared method on façade
            sandbox.log("Common: " + common.getInstance());
        }
    };
});
