//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp");
//Author URL: http://webdesign-master.ru
(()=> {
    $.fn.animated = function(inEffect) {
        $(this).each(()=> {
            let ths = $(this);
            ths.css("opacity", "0").addClass("animated").waypoint((dir)=> {
                if (dir === "down") {
                    ths.addClass(inEffect).css("opacity", "1");
                }
            }, {
                offset: "90%"
            });

        });
    };
})(jQuery);
