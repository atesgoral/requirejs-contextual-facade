define(function () {
    // A new instance of the common module will be loaded for each context
    console.log("[COMMON] Module loaded");

    return {
        beep: function () {
            console.log("[COMMON] BEEP!");
        }
    };
});
