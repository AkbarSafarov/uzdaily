$(function(){

    $('.slider_block_wr').each(function(){
        const slider = $(this).find('.swiper');
        const sliderId = slider.data('id');
        const sliderClass = '.' + sliderId;
        const arrow = slider.data('arrow');    

        const newProductsSwiper = new Swiper(sliderClass, {
            loop: true,
            slidesPerView: 1,
            loopedSlides: 1,
            navigation: {
                nextEl: '.swiper-' + arrow + '-next',
                prevEl: '.swiper-' + arrow + '-prev',
            },
            pagination: {
                el: ".swiper-pagination",
            },
            effect: "fade",
            lazy: true
        });
    })
	
	var $body = $(document.body),
      	$html = $(document.documentElement);

    function formPopup($btn,$wrap){

    var closeForm = $('.formExtraWrapper .close-form'),
            formWrap = $($wrap),
            formBtn = $($btn),
            formOpened = 'opened',
            overflowHidden = 'oveflowHidden';

        closeForm.on('click', function() {
            formWrap.removeClass(formOpened);
            $html.removeClass(overflowHidden);
        });
        formBtn.on('click', function(event) {
            formWrap.addClass(formOpened);
            $html.toggleClass(overflowHidden);
            event.preventDefault();
        });

        $html.on('keyup', function(event) {
            if (formWrap.hasClass(formOpened) && event.keyCode == 27) {
                formWrap.removeClass(formOpened);
                $html.removeClass(overflowHidden);
            }
        });
        $body.on('click touchstart', function(a) {
            if ($(a.target).closest('.formExtraWrapper').length || $(a.target).closest(formBtn).length) return;
            if (formWrap.hasClass(formOpened)) {
                formWrap.removeClass(formOpened);
                $html.removeClass(overflowHidden);
            }
        });
    }

	formPopup('.form_btn','.form_popup');

    var menuBtn = $('.burger'),
        menuWrapper = $('.menu_burger'),
        menuClose = $('.menuClose'),        
        openedMenu = 'opened',
        overflowHidden = 'oveflowHidden';

    menuBtn.on("click", function(event) {
        menuWrapper.toggleClass(openedMenu);
        menuBtn.toggleClass(openedMenu);
        $html.toggleClass(overflowHidden);
        $html.toggleClass('open_menu');
    });
    menuClose.on("click", function(event) {
        menuWrapper.removeClass(openedMenu);
        menuBtn.removeClass(openedMenu);
        $html.removeClass(overflowHidden);
        $html.removeClass('open_menu');
    });

    $(document).on('click', function(e){
        if( $(e.target).closest('.search_form_popup').length || $(e.target).closest('.search_btn_mobile').length ||  $(e.target).closest('.dropdown-item-current').length || $(e.target).closest(menuBtn).length || $(e.target).closest(menuWrapper).length)
            return;
        if (menuBtn.hasClass(openedMenu)){
            menuWrapper.removeClass(openedMenu);
            menuBtn.removeClass(openedMenu);
            $html.removeClass(overflowHidden);
            $html.removeClass('open_menu');
        }

        if ($('.lang_block').hasClass('active')){
            $('.lang_block').removeClass('active')
        }

        if ($('.search_form_popup').hasClass('active')){
            $('.search_form_popup').removeClass('active')
        }
    });

    $('.search_btn_mobile').on('click', function(){
        if ($('.search_form_popup').hasClass('active')){
            $('.search_form_popup').removeClass('active');
        } else {
            $('.search_form_popup').addClass('active');
        }
    });

    $('.dropdown-item-current').on('click', function(){
        if ($(this).parents('.lang_block').hasClass('active')){
            $(this).parents('.lang_block').removeClass('active');
        } else {
            $(this).parents('.lang_block').addClass('active');
        }
    });


    var tmenu = $('.header'),
        tmenuOffset = tmenu.offset();

    $(window).scroll(function(){
        if (($(window).scrollTop() > tmenuOffset.top)) {
            $('.banners_block_wr').addClass('fixed'); 
        } else {
            $('.banners_block_wr').removeClass('fixed');
        };
    }); 
});

var backButton = document.querySelector('.back_btn');

if (backButton) {
    backButton.addEventListener('click', function(event) {
        event.preventDefault();
        history.back();
    });
}

document.addEventListener("DOMContentLoaded", function() {
    function showBannerPopup() {
        var bannerPopup = document.querySelector('.banner_popup');
        if(bannerPopup) {
            if (window.innerWidth <= 1024) {
                bannerPopup.classList.add('opened');
                
                var countdown = 6;
                var timerText = bannerPopup.querySelector('.timer .text');
                timerText.textContent = 'Осталось ' + countdown + ' секунд';

                var timerInterval = setInterval(function() {
                    countdown--;
                    timerText.textContent = 'Осталось ' + countdown + ' секунд';

                    if (countdown <= 0) {
                        clearInterval(timerInterval);
                        bannerPopup.classList.remove('opened');
                    }
                }, 1000);
            }
        }
    }

    function hideBannerPopup() {
        var bannerPopup = document.querySelector('.banner_popup');
        bannerPopup.classList.remove('opened');
    }

    var closeBannerButton = document.querySelector('.close_banner');
    closeBannerButton.addEventListener('click', hideBannerPopup);

    showBannerPopup();
});



// document.addEventListener("DOMContentLoaded", function() {
//     const changeElements = document.querySelectorAll('.currencyconverter-minimalistic-change-percentage');

//     changeElements.forEach(function(element) {
//         let percentage = parseFloat(element.innerText.trim()); // Получаем значение процента и преобразуем его в число
//         if (percentage > 0) {
//             element.classList.add('green');
//         } else {
//             element.classList.add('red');
//         }
//     });

//     const currencyContainers = document.querySelectorAll('.currencyconverter-minimalistic-single-currency');

//     currencyContainers.forEach(function(container) {
//         let tickerElement = container.querySelector('.currencyconverter-minimalistic-ticker');
//         let priceElement = container.querySelector('.currencyconverter-minimalistic-currency-price');
//         const price = priceElement.innerText;

//         if (tickerElement && priceElement) {
//             let tickerText = tickerElement.innerText.trim();
//             let currencySymbol = '';

//             switch (tickerText) {
//                 case 'USD':
//                     currencySymbol = '$';
//                     break;
//                 case 'EUR':
//                     currencySymbol = '€';
//                     break;
//                 case 'RUB':
//                     currencySymbol = '₽';
//                     break;
//                 case 'UZS':
//                     currencySymbol = 'UZS';
//                     break;
//                 default:
//                     currencySymbol = '';
//                     break;
//             }

//             priceElement.innerText = currencySymbol + '1 – ' + price;
//             tickerElement.innerText = 'UZS – ';
//         }
//     });
// });

