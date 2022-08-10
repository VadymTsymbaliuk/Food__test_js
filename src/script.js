"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const calculator = require('./modules/calculator'),
        cards = require('./modules/cards'),
        form = require('./modules/form'),
        modal = require('./modules/modal'),
        slider = require('./modules/slider'),
        tabs = require('./modules/tabs'),
        timer = require('./modules/timer');

    calculator();
    form();
    cards();
    modal();
    slider();
    tabs();
    timer();
});


