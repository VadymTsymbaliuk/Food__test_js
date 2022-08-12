"use strict";
import calculator from './modules/calculator';
import cards from './modules/cards';
import form from './modules/form';
import modal, {openModal} from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';

window.addEventListener("DOMContentLoaded", () => {
    const modalTimerId = setTimeout(()=>openModal('.modal', modalTimerId), 50000)
    calculator();
    form("form");
    cards();
    modal('[data-modal]','.modal', modalTimerId);
    slider({
        container:".offer__slider",
        slide:".offer__slide",
        wrapper: '.offer__slider-wrapper',
        field:'.offer__slider-inner',
        prevArrow:'.offer__slider-prev',
        nextArrow:'.offer__slider-next',
        total:'#total',
        current:'#current'
    });
    tabs(".tabheader__item",'.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2022-11-11');
});


