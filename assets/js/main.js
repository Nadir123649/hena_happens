$('.testominal-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    Infinity: false,
    dots: false,
    arrows: true,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-prev"><i class="icon-long-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="icon-long-arrow-right"></i></button>',
    responsive: [{
            breakpoint: 450,
            settings: {

                slidesToShow: 1,

            }
        },
        {
            breakpoint: 420,
            settings: {
                autoplay: true,

                slidesToShow: 1,
                centerMode: false,
            }
        }
    ]
});

//   sliderss
$(document).ready(function() {
    $('.portfolio-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        Infinity: false,
        fade: true,
        asNavFor: '.slick-carousel'
    });
    $('.slick-carousel').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.portfolio-slider',
        dots: false,
        nav: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="icon-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icon-long-arrow-right"></i></button>',
    });
});

//   tabs js
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.dataset.tab;

        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });

        // Show the selected tab content
        document.getElementById(tab).classList.remove('hidden');

        // Set active class on the clicked button
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
        button.classList.add('active');
    });
});

// accordion js  for opening

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const arrow = header.querySelector('.arrow');

    header.addEventListener('click', () => {
        item.classList.toggle('active');

        if (item.classList.contains('active')) {
            content.style.display = 'block';
            arrow.classList.add('up');
        } else {
            content.style.display = 'none';
            arrow.classList.remove('up');
        }
    });
});

// header toogel code


var menuBtn = document.querySelector('.menu-btn');
var navMenu = document.querySelector('nav');
menuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('nav-menu-open');
});