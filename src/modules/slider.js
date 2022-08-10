function slider(){
    let slideIndex = 1,
        offset = 0;

    const slider = document.querySelector('.offer__slider'),
        sliderWrapper = document.querySelector('.offer__slider-wrapper'),
        sliderInner = document.querySelector('.offer__slider-inner'),
        sliderItems = document.querySelectorAll('.offer__slide'),
        prevSlide = document.querySelector('.offer__slider-prev'),
        nextSlide = document.querySelector('.offer__slider-next'),
        totalSlides = document.querySelector('#total'),
        currentSlide = document.querySelector('#current'),
        width = window.getComputedStyle(sliderWrapper).width;


    sliderWrapper.style.overflow = "hidden"
    sliderInner.style.display = "flex"
    sliderInner.style.width = 100 * sliderItems.length + '%';
    sliderInner.style.transition = '0.5s all';

    if (sliderItems.length < 10) {
        totalSlides.textContent = `0${sliderItems.length}`
        currentSlide.textContent = `0${slideIndex}`
    } else {
        totalSlides.textContent = `${sliderItems.length}`
        currentSlide.textContent = `${slideIndex}`
    }

    sliderItems.forEach(slide => {
        slide.style.width = width
    });

    slider.style.position = "relative";
    const indicators = document.createElement('ol'),
        dots = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    `
    slider.append(indicators)

    for (let i = 0; i < sliderItems.length; i++) {
        const dot = document.createElement('li')
        dot.setAttribute('data-slide-to', i + 1)
        dot.style.cssText = `
        box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
        `

        if (i == 0) {
            dot.style.opacity = 1
        }
        indicators.append(dot);
        dots.push(dot)
    }


    prevSlide.addEventListener("click", () => {
        if (offset === 0) {
            offset = deleteNoDigits(width) * (sliderItems.length - 1)
        } else {
            offset -= deleteNoDigits(width)
        }

        sliderInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex === 1) {
            slideIndex = sliderItems.length;
        } else {
            slideIndex--
        }

        showCurrentSlide(sliderItems.length);

        dots.forEach(dot => dot.style.opacity = '.5')
        dots[slideIndex - 1].style.opacity = 1
    })
    nextSlide.addEventListener("click", () => {
        if (offset === (deleteNoDigits(width) * (sliderItems.length - 1))) {
            offset = 0
        } else {
            offset += deleteNoDigits(width)
        }

        sliderInner.style.transform = `translateX(-${offset}px)`

        if (slideIndex === sliderItems.length) {
            slideIndex = 1
        } else {
            slideIndex++
        }

        showCurrentSlide(sliderItems.length);

        dots.forEach(dot => dot.style.opacity = '.5')
        dots[slideIndex - 1].style.opacity = 1
    })
    function deleteNoDigits(str) {
        return +str.replace(/\D/g, "")
    }

    function showCurrentSlide(num) {
        if (num < 10) {
            currentSlide.textContent = `0${slideIndex}`
        } else {
            currentSlide.textContent = `${slideIndex}`
        }
    }


    //навігація для слайдеру

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = deleteNoDigits(width) * (slideTo - 1);
            sliderInner.style.transform = `translateX(-${offset}px)`

            showCurrentSlide(sliderItems.length)

            dots.forEach(dot => dot.style.opacity = '0.5')
            dots[slideIndex - 1].style.opacity = 1
        })
    })
};
module.exports = slider;