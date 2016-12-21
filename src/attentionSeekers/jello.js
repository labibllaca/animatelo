; (function (animatejs) {
    'use strict';
    animatejs.jello = function (selector, options) {
        var keyframeset = [
            {
                "transform": "none",
                "offset": 0
            },
            {
                "transform": "none",
                "offset": 0.111
            },
            {
                "transform": "skewX(-12.5deg) skewY(-12.5deg)",
                "offset": 0.222
            },
            {
                "transform": "skewX(6.25deg) skewY(6.25deg)",
                "offset": 0.33299999999999996
            },
            {
                "transform": "skewX(-3.125deg) skewY(-3.125deg)",
                "offset": 0.444
            },
            {
                "transform": "skewX(1.5625deg) skewY(1.5625deg)",
                "offset": 0.555
            },
            {
                "transform": "skewX(-0.78125deg) skewY(-0.78125deg)",
                "offset": 0.6659999999999999
            },
            {
                "transform": "skewX(0.390625deg) skewY(0.390625deg)",
                "offset": 0.777
            },
            {
                "transform": "skewX(-0.1953125deg) skewY(-0.1953125deg)",
                "offset": 0.888
            },
            {
                "transform": "none",
                "offset": 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
