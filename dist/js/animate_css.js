// $(".element").animated("zoomInUp");
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

// $(".element").animated("zoomInUp", "offset");
(()=> {
    $.fn.animatedOffset = function(inEffect,offset) {
        $(this).each(()=> {
            let ths = $(this);
            ths.css("opacity", "0").addClass("animated").waypoint((dir)=> {
                if (dir === "down") {
                    ths.addClass(inEffect).css("opacity", "1");
                }
            }, {
                offset: `${offset}%`
            });

        });
    };
})(jQuery);