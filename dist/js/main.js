$().ready(() => {

    let blockItem = $('.block-item');
    let blockImag = $('.block-item__image');
    let itemOverlay = $('.block-item__overlay');
    let headerText = $('.block-item__header-text ');
    let blockItemText = $('.block-item__body-text');

    blockItem.mouseover(() => {
       itemOverlay.addClass('block-item__overlay-hide');
        blockItemText.addClass('headerBlur');
        headerText.addClass('headerBlur');
        blockImag.addClass('block-item__image_blur');
    });
    blockItem.mouseout(() => {
        blockImag.removeClass('block-item__image_blur');
        itemOverlay.removeClass('block-item__overlay-hide');
        blockItemText.removeClass('headerBlur');
        headerText.removeClass('headerBlur');
    });
});
