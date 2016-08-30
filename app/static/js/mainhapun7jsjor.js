$(document).ready(function () {
    $('#ymap').css('height',$('#map-img').height());
    $('#ymap').hide();
    if(!myMap)ymaps.ready(init);
    
    
    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('body,html').animate({
            scrollTop: destination-60
        }, 800);
        return false;
    });
    
    $('#ymap-btn').click(function(){
        $('#map-img, #ymap').toggle();
    });
    
    $('#worktime-modal .icon--arrow-up').on('click',function(){
        $('#worktime-modal').modal('hide'); 
    });    
    
});
/*FORM STYLER*/
(function($) {
    $(function() {
      $('input, select').styler();
    });
})(jQuery);
/*КАРТА*/
var myMap;

// Дождёмся загрузки API и готовности DOM.
function init() {
	// Создание экземпляра карты и его привязка к контейнеру с
	// заданным id ("map").
	myMap = new ymaps.Map('ymap', {
		// При инициализации карты обязательно нужно указать
		// её центр и коэффициент масштабирования.
		center: [49.895955, 82.624158], // Москва
		zoom: 16
	}, {
		searchControlProvider: 'yandex#search'
	});

	$(document).ready(function () {
		myMap.behaviors.disable('scrollZoom');
		myMap.geoObjects.add(new ymaps.Placemark([49.895994, 82.626379], {
			balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
		}, {
			preset: 'islands#icon',
			iconColor: '#0095b6'
		}));
	});
}

$('.index #header').affix({
  offset: {
    top: 150,
    bottom: function () {
      return (this.bottom = $('.footer').outerHeight(true))
    }
  }
});
$(function() {
  return $(".modal").on("show.bs.modal", function() {
    var curModal;
    curModal = this;
    $(".modal").each(function() {
      if (this !== curModal) {
        $(this).modal("hide");
      }
    });
  });
});


$(document).ready(function () {

    $("#top-slider").owlCarousel({
        items: 1,
        nav:true,
        navText:['<i class="icon icon--prev"></i>','<i class="icon icon--next"></i>'],
    });
    $("#menu-slider").owlCarousel({
        items: 1,
        nav:true,
        navText:['<i class="icon icon--prev"></i>','<i class="icon icon--next"></i>'],
    });

});
$(document).ready(function(){
    Inputmask().mask(document.querySelectorAll("input"));
    $( ".datepicker" ).datepicker({
        regional:"ru",
        showButtonPanel: true,
    });
});






    var feed = new Instafeed({
        target:'#instagram-grid',
        get: 'tagged',
        tagName: 'awesome',
        clientId: '1574083',
        accessToken: "fb2e77d.47a0479900504cb3ab4a1f626d174d2d",
        template: '<div class="section-instagram__grid-item col-xs-4"><a href="{{link}}"><img src="{{image}}" data-rjs="3" alt=""></a></div>'
    });
    feed.run();



/*var stickyHeaders = (function () {

    var $window = $(window),
        $stickies;

    var load = function (stickies) {

        if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {

            $stickies = stickies.each(function () {

                var $thisSticky = $(this);
                
                $thisSticky
                    .data('originalOffsetTop', $thisSticky.offset().top)
                    .data('originalHeight', $thisSticky.outerHeight())
                    .height($thisSticky.outerHeight());
                 //console.log("DEBUG "+$thisSticky.outerHeight());
                //console.log($thisSticky);
            });

            $window.off("scroll.stickies").on("scroll.stickies", function () {
                _whenScrolling();
            });
        }
    };

    var _whenScrolling = function () {
        $stickies.each(function (i) {
            var $thisSticky = $(this),
                $stickyPosition = $thisSticky.data('originalOffsetTop');
            
            if ($stickyPosition <= $window.scrollTop()) {
//console.log("$stickyPosition <= $window.scrollTop()");
                var $nextSticky = $stickies.eq(i + 1),
                    $nextStickyPosition = $nextSticky.data('originalOffsetTop') - $thisSticky.data('originalHeight');

                $thisSticky.addClass("fixed");
/!*
if ($nextSticky.length > 0 && $thisSticky.offset().top >= $nextStickyPosition) {

    $thisSticky.addClass("absolute").css("top", $nextStickyPosition);
}*!/

            } else {
//console.log("$stickyPosition <= $window.scrollTop() ELSE");
                var $prevSticky = $stickies.eq(i - 1);

                $thisSticky.removeClass("fixed");
/!*
    if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalOffsetTop') - $thisSticky.data('originalHeight')) {

        $prevSticky.removeClass("absolute").removeAttr("style");
    }
*!/
            }
        });
        
    };
    return {
        load: load
    };
})();

$(function () {
    stickyHeaders.load($(".section-price__title"));
});*/

window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    $('#top-slider').css({transform:'translateY('+(scrolled / 2)+'px)'});
    /* Жутко тормозит
    $('#top-slider').offset({
        top: scrolled / 2
    });*/
}

$(document).ready(function(){
    $(document).on('click', '.section-price__title', function(){
        $(this).toggleClass('active').next('.section-price__hidden-wrapper').slideToggle(300);
    })
})


$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false,
      pagination: false
  });
 
});
