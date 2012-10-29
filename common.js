define(function () {
    var instance = Math.floor(Math.random() * 0x10000000).toString(16);

    return {
        getInstance: function () {
            return instance;
        }
    };
});
