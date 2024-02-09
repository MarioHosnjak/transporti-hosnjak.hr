function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend(
    {
      start: 0,
      end: 100,
      easing: "swing",
      duration: 400,
      complete: "",
    },
    options
  );

  var thisElement = $(this);

  $({ count: settings.start }).animate(
    { count: settings.end },
    {
      duration: settings.duration,
      easing: settings.easing,
      step: function () {
        var mathCount = Math.ceil(this.count);
        thisElement.text(`+${mathCount.toLocaleString("hi-IN")}`);
      },
      complete: settings.complete,
    }
  );
};

var counterDiv = document.querySelector(".item");

document.addEventListener(
  "scroll",
  function () {
    if (counterDiv && isInViewport(counterDiv)) {
      $("#number1").jQuerySimpleCounter({ end: 16000, duration: 3000 });
      $("#number2").jQuerySimpleCounter({ end: 40, duration: 3500 });
      $("#number3").jQuerySimpleCounter({ end: 20, duration: 3500 });
      $("#number4").jQuerySimpleCounter({ end: 50, duration: 3200 });
      counterDiv = undefined;
    }
  },
  {
    passive: true,
  }
);

/* $('#number1').jQuerySimpleCounter({end: 13000,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 40,duration: 3500});
$('#number3').jQuerySimpleCounter({end: 17,duration: 3500});
$('#number4').jQuerySimpleCounter({end: 50,duration: 3200}); */
