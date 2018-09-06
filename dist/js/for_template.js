;$(()=>{

    //Прокрутка
    //*******************************************************************************************
    let temp_navLinks = $('.template_nav_block_items');
    let temp_navLinkBurger = $('.template_header_hamburger_items');
    temp_navLinks.localScroll();
    temp_navLinkBurger.localScroll();


    //NAV BLOCK
    //*******************************************************************************************
    let temp_navBtn = $('.template_nav_block_contacts__btn');
    temp_navBtn.on('click', () => {
        showWindowCallWrap();
    });

    //АНИМАЦИЯ
    //*******************************************************************************************
    $('.template_header_block__logo').animated('fadeIn');

    $('.template_header_block__offer_text').animated('bounceInLeft');
    $('.template_header_block__under_text').animated('bounceInRight');
    $('.template_header_block__text').animated('fadeInRight');


    $('.template_services_row_one__header_text').animated('fadeInRight');
    $('.template_services_row_two__border').animated('bounceInLeft');
    $('.template_services_row_two_media_content_img__logo').animatedOffset('bounceInLeft',70);

    $('.recommendations_row_one__header_text').animated('fadeInRight');
    $('.recommendations_row_two_border').animated('bounceInLeft');
    $('.template_services_row_two_text_content__content_text_one').animated('fadeIn');
    $('.template_advantages_row_two_content_items__item').animated('fadeIn');
    $('.template_the_main_row_two_content_items__item').animated('fadeIn');
    $('.recommendations_elems').animated('fadeInUp');


    $('.template_advantages_row_one__header_text').animated('fadeInRight');
    $('.template_advantages_row_two__border').animated('bounceInLeft');
    $('.template_the_main_row_one__header_text').animated('fadeInRight');
    $('.template_the_main_row_two__border').animated('bounceInLeft');



    //*******************************************************************************************
    //Обвертка для блока nav_block чтобы header не прыгал когда nav_block прилипает
    $('.template_nav_block').wrap("<div class='template_nav_block_placeholder' id='main'></div>");
    $('.template_nav_block_placeholder').height($('.template_nav_block').outerHeight());
    //конец обвертки

    let temp_win = $(window);

    // Прилипалка для блока nav_block
    temp_win.on('scroll', () => {
        let temp_zeroPoint = temp_win.scrollTop();
        if (temp_zeroPoint >= 100) {
            $('.template_nav_block').addClass('stuck');
        }
        else {
            $('.template_nav_block').removeClass('stuck');
        }
        // $('.nav_block').waypoint(() => {
        //     $('.nav_block').addClass('stuck');
        //
        // }, {
        //     offset: '-100'
        // });
    });

    //Конецк Прилипалки для блока nav_block

    //Кнопка бургер
    $('.template_menu').click(function () {

        let burger = $('.template_header_hamburger');
        let menu = $('.template_menu');
        burger.toggleClass('template_header_hamburger_open');

        let AllLinks = $('.template_header_hamburger_item__link_main, .template_header_hamburger_item__link_servives, .template_header_hamburger_item__link_works, .template_header_hamburger_item__link_about_us');

        AllLinks.on('click', () => {
            setTimeout(() => {
                burger.removeClass('template_header_hamburger_open');
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



});