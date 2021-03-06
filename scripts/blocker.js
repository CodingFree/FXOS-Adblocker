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
            console.log("FXOS Adblocker: Ready to load");
            if (document.documentElement) {
                this._started = true;
                this.removeImages();
            } else {
                this._started = true;
                window.addEventListener('load', this.removeImages);
            }
        },
        removeImages: function () {
            var images = document.getElementsByTagName("img");
            var l = images.length;
            for (var i = 0; i < l; i++) {
                images[0].parentNode.removeChild(images[0]);
            }
        },

        /**
         * Stop handling screenshot events.
         * @memberof Screenshot.prototype
         */
        stop: function () {
            console.log("FXOS-Adblocker Stopped at: " + window.location);
            if (!this._started) {
                throw 'FXOS-Adblocker was never start()\'ed but stop() is called.';
            }
            this._started = false;
        }

    }

    var uploader = new uploader();
}());