;
$(() => {

    //Прокрутка
    //*******************************************************************************************
    let navLinks = $('.nav_block_items');
    let navLinkBurger = $('.header_hamburger_items');
    navLinks.localScroll();
    navLinkBurger.localScroll();


    //NAV BLOCK
    //*******************************************************************************************
    let navBtn = $('.nav_block_contacts__btn');
    navBtn.on('click', () => {
        showWindowCallWrap();
    });


    //*******************************************************************************************
    //Обвертка для блока nav_block чтобы header не прыгал когда nav_block прилипает
    $('.nav_block').wrap("<div class='nav_block_placeholder' id='main'></div>");
    $('.nav_block_placeholder').height($('.nav_block').outerHeight());
    //конец обвертки

    let win = $(window);

    // Прилипалка для блока nav_block
    win.on('scroll', () => {
        let zeroPoint = win.scrollTop();
        if (zeroPoint >= 100) {
            $('.nav_block').addClass('stuck');
        }
        else {
            $('.nav_block').removeClass('stuck');
        }
        // $('.nav_block').waypoint(() => {
        //     $('.nav_block').addClass('stuck');
        //
        // }, {
        //     offset: '-100'
        // });
    });

    //Конецк Прилипалки для блока nav_block


    //*******************************************************************************************
    //блок для льва - галерея
    // let lionImg = $('.gallery_block_lion__lion_img');
    let lionImgLink = $('.gallery_block_lion__link');
    // lionImg.mouseenter(() => {
    //     lionImg.addClass('hoverClass');
    //     lionImgLink.mouseenter(() => {
    //         lionImg.addClass('hoverClass');
    //     });
    // });
    // lionImg.mouseleave(() => {
    //     lionImg.removeClass('hoverClass');
    // });
    lionImgLink.animatedOffset('fadeInDown', 60);
    //Конец блок для льва - галерея


    //*******************************************************************************************
    //Анимации блок для карточек
    $('.header_block__logo').animated('fadeIn');

    $('.header_block__offer_text').animated('bounceInLeft');
    $('.header_block__under_text').animated('bounceInRight');
    $('.header_block__text').animated('fadeInRight');


    $('.printing_row_two_border').animated('bounceInLeft');
    $('.advertising_sec_row_six_border').animated('bounceInLeft');
    $('.branding_row_nine_border').animated('bounceInLeft');
    $('.inet_services_row_thirteen_border').animated('bounceInLeft');


    $('.creativity_block').animated('fadeInUp');
    $('.operatively_block').animated('fadeInUp');
    $('.quality_block').animated('fadeInUp');
    $('.twol_block__header_text').animated('bounceInLeft');
    $('.gallery_blocks__header_text').animated('bounceInLeft');
    $('.gallery_blocks__footer_text').animated('bounceInLeft');


    $('.printing_row_one__header_text').animated('fadeInRight');
    $('.business_card').animated('fadeInUp');
    $('.fluer_card').animated('fadeInUp');
    $('.calender_card').animated('fadeInUp');
    $('.magazine_card').animated('fadeInUp');
    $('.billboard_card').animated('fadeInUp');
    $('.folder_card').animated('fadeInUp');
    $('.stickers').animated('fadeInUp');
    $('.menus').animated('fadeInUp');

    $('.advertising_sec_row_five__header_text').animated('fadeInRight');
    $('.outdoor_advertising').animated('fadeInUp');
    $('.promo').animated('fadeInUp');
    $('.video_advertising').animated('fadeInUp');
    $('.events').animated('fadeInUp');


    $('.printing_row_twelve__header_text').animated('fadeInRight');
    $('.site_app_dev').animated('fadeInUp');
    $('.make_content').animated('fadeInUp');
    $('.call_centr').animated('fadeInUp');

    $('.printing_row_eight__header_text').animated('fadeInRight');
    $('.logo_dev').animated('fadeInUp');
    $('.style').animated('fadeInUp');
    $('.presentation').animated('fadeInUp');
    $('.packaging').animated('fadeInUp');
    $('.clothing').animated('fadeInUp');
    $('.paraphernalia').animated('fadeInUp');
    $('.prizes').animated('fadeInUp');
    $('.branding_cars').animated('fadeInUp');

    $('.recommendations_row_one__header_text').animated('fadeInRight');
    $('.recommendations_row_two_border').animated('bounceInLeft');
    $('.recommendations_elems').animated('fadeInUp');


    $('.map_block_desc').animatedOffset('bounceInLeft', 90);
    $('.map_block_map').animatedOffset('bounceInRight', 90);
    $('.footer').animatedOffset('fadeInUp', 90);
    // Конец Анимации блок для карточек


    //*******************************************************************************************
    //Window Call
    let windowsCallWrap = $('.window_call_wrap');
    let windowCall = $('.windows_call_main_cancel');
    let windowCallMain = $('.windows_call_main');
    let btnSubmit = $('.windows_call_main_right_side_submit_block__submit');

    windowCall.on('click', (eve) => {
        eve.preventDefault();
        windowsCallWrap.css({
            display: 'none'
        });
        clearTimeout(timer);
    });

    let timer = setInterval(showWindowCallWrap, 120000);

    //Показывает Window Call чеерз время
    function showWindowCallWrap() {
        windowCallMain.animated('bounceInDown');
        windowsCallWrap.animated('fadeIn');
        windowsCallWrap.css({
            display: 'block'
        })
    }

    btnSubmit.on('click', (even) => {
        even.preventDefault();
        windowCallMain.animated('bounceOutUp');
        windowsCallWrap.animated('fadeOut');
        setTimeout(() => {
            windowsCallWrap.css({
                display: 'none'
            })
        }, 1000);

        clearTimeout(timer);
    });
    //Конец Window Call


    //*******************************************************************************************

    //Кнопка бургер
    $('.menu').click(function () {

        let burger = $('.header_hamburger');
        let menu = $('.menu');
        burger.toggleClass('header_hamburger_open');

        let AllLinks = $('.header_hamburger_item__link_main, .header_hamburger_item__link_servives, .header_hamburger_item__link_works, .header_hamburger_item__link_about_us');

        AllLinks.on('click', () => {
            setTimeout(() => {
                burger.removeClass('header_hamburger_open');
                menu.removeClass('active');
            }, 800)
        });


        if ($(this).is('.active:not(.back)')) {
            $(this).addClass('back');
        } else if ($(this).is('.back')) {
            $(this).removeClass('back');
        } else {
            $(this).addClass('active');
        }
    });
    //Конец кнопки бургер


    //*******************************************************************************************
    ymaps.ready(init);















});


function init() {
    let myMap;
    let TwoLions;
    let myPin;
    let myStyleMap;
    myMap = new ymaps.Map("myMap", {
        center: [48.0162,37.7970],
        zoom: 17,
        controls: []
    });
    myMap.behaviors.disable([
        // 'drag',
        'scrollZoom',
        'dblClickZoom',
    ]);

    myStyleMap = `<div class="myMapStyle">
                <h3 class="mapHeaderText">
                ПОЛИГРАФИЯ <br> РЕКЛАМА <br>БРЕНДИНГ<br></h3>
                <img  class="mapLogo" src="../img/Icons/lion_log1.svg">
                <div class="mapLine"></div>
                <p class="mapDesc">ЛЮБОЙ СЛОЖНОСТИ</p>
        </div>`;


    TwoLions = new ymaps.Placemark([48.0165,37.7969], {
            balloonContentHeader: myStyleMap,
            balloonContentBody: '<span class="mapBody">Мы делаем качественную рекламу для Вас</span>',
            balloonContentFooter: '<span class="mapBodyTel">+38 (071) 348 00 95 <br> +38 (071) 348 00 96 </span>',
            hintContent: ''
        },
        {
            iconLayout: 'default#image',
            iconImageHref: '../img/Icons/maps-and-flags.svg',
            iconImageSize: [40, 80],
            iconImageOffset: [-20, -65]
        });

    myMap.geoObjects.add(TwoLions);
}

