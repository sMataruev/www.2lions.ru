ymaps.ready(init);

function init() {
    let myMap;
    let TwoLions;
    let myPin;
    let myStyleMap;
    myMap = new ymaps.Map("myMap", {
        center: [48.0170, 37.8113],
        zoom: 17,
        controls: []
    });
    myMap.behaviors.disable([
        // 'drag',
        // 'scrollZoom',
        'dblClickZoom',
    ]);

    myStyleMap = `<div class="myMapStyle">
                <h3 class="mapHeaderText">
                ПОЛИГРАФИЯ <br> РЕКЛАМА <br>БРЕНДИНГ<br></h3>
                <img  class="mapLogo" src="../img/Icons/lion_log1.svg">
                <div class="mapLine"></div>
                <p class="mapDesc">ЛЮБОЙ СЛОЖНОСТИ</p>
        </div>`;


    TwoLions = new ymaps.Placemark([48.0170, 37.8113], {
            balloonContentHeader: myStyleMap,
            balloonContentBody: '<span class="mapBody">Мы делаем качественную рекламу для Вас</span>',
            balloonContentFooter: '<span class="mapBodyTel">+38 (071) 111 11 11 <br> +38 (071) 111 11 11 </span>',
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




