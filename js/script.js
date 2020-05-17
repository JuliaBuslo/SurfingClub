// header slider
$(document).ready(function(){
    let headerSlider = $('#headerSlider');

    headerSlider.on('initialize.owl.carousel initialized.owl.carousel ', function(event) {
        $('.slide-controls__number-active').text(event.item.index + 1);
        $('.slide-controls__number-total').text(event.item.count);
    });

    headerSlider.owlCarousel({
        items: 1,
        dots: false,
        smartSpeed: 1500,
    });

    $('#headerSliderRight').click(function() {
        headerSlider.trigger('next.owl.carousel');
    })
    $('#headerSliderLeft').click(function() {
        headerSlider.trigger('prev.owl.carousel');
    })

    headerSlider.on('changed.owl.carousel', function(event) {
        $('.slide-controls__number-active').text(event.item.index + 1);
        $('.slide-controls__number-total').text(event.item.count);
    });

  });

//   shop slider
$(document).ready(function(){
    let shopSlider = $('#shopSlider');

    shopSlider.owlCarousel({
        loop: true,
        dots: false,
        margin: 2,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            1254: {
                items: 3,
            }
        }
    });

    $('#shopSliderRight').click(function() {
        shopSlider.trigger('next.owl.carousel');
    })
    $('#shopSliderLeft').click(function() {
        shopSlider.trigger('prev.owl.carousel');
    })
  });
