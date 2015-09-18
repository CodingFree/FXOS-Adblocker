(function () {

    function uploader() {
        console.log("FXOS-Adblocker created!");
        this._started = false;
        window.alert("Test");
        uploader.prototype.start();

    }
    uploader.prototype = {
        /**
         * Start to handle screenshot events.
         * @memberof Screenshot.prototype
         */
        start: function () {
            console.log("FXOS-Adblocker Running");
            if (this._started) {
                throw 'Instance should not be start()\'ed twice.';
            }
            this._started = true;
        },

        /**
         * Stop handling screenshot events.
         * @memberof Screenshot.prototype
         */
        stop: function () {
            if (!this._started) {
                throw 'FXOS-Adblocker was never start()\'ed but stop() is called.';
            }
            this._started = false;
        }

    var uploader = new uploader();
}());