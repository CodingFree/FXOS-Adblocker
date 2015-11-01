(function () {

    function uploader() {
        this._started = false;
        uploader.prototype.start();

    }
    uploader.prototype = {
        /**
         * Start to handle screenshot events.
         * @memberof Screenshot.prototype
         */
        start: function () {
            console.log("FXOS-Adblocker Running at: "+window.location);
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
            console.log("FXOS-Adblocker Stopped at: "+window.location);
            if (!this._started) {
                throw 'FXOS-Adblocker was never start()\'ed but stop() is called.';
            }
            this._started = false;
        }

    }
    
    var uploader = new uploader();
}());