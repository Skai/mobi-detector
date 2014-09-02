var mobiDetector = {

    device: {},

    detect: function() {

        this.device.Mobile = this.isMobile();
        this.device.iOS = this.iOSVersion();
        this.device.Android = this.androidVersion();
        this.device.iPad = this.isIpad();
        this.device.isIpod = this.isIpad();
        this.device.isBlackBerry = this.isIpad();
        this.device.isWindowsPhone = this.isIpad();

        return this.device;
    },

    isMobile: function() {
        return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|webOS|Windows Phone/i) ? true : false
    },

    androidVersion: function() {
        var match = navigator.userAgent.match(/Android\s([0-9\.]*)/);
        return match ? match[1] : false;
    },

    iOSVersion: function() {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            //for iOS 2.0 and later: <http://bit.ly/TJjs1V>
            var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
            return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)][0];
        } 

        return false;
    },

    isIpad: function() {
        return navigator.userAgent.match(/iPad/i) ? true : false
    },

    isIpad: function() {
        return navigator.userAgent.match(/iPhone/i) ? true : false
    },

    isBlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false
    },

    isIpod: function() {
        return navigator.userAgent.match(/iPod/i) ? true : false
    },

    isWindowsPhone: function() {
        return navigator.userAgent.match(/Windows Phone/i) ? true : false
    }
}