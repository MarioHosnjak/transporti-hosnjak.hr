$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(`+${mathCount.toLocaleString('hi-IN')}`);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({end: 13000,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 40,duration: 3500});
$('#number3').jQuerySimpleCounter({end: 17,duration: 3500});
$('#number4').jQuerySimpleCounter({end: 50,duration: 3200});