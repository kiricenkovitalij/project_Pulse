$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1200,
      slidesToShow: 1,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: true,
            arrows: false,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__cards').removeClass('catalog__cards_active').eq($(this).index()).addClass('catalog__cards_active');
    });

    $('.catalog__link').each(function(i) {
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog__content').eq(i).toggleClass('catalog__content_active');
        $('.catalog__list').eq(i).toggleClass('catalog__list_active')
      })
    })
    
    $('.catalog__back').each(function(i) {
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog__content').eq(i).toggleClass('catalog__content_active');
        $('.catalog__list').eq(i).toggleClass('catalog__list_active')
      })
    })

//Modal 
    $('[data-modal=consultation]').on('click', function(){
      $('.overlay, #consultation').fadeIn('slow')
    });

    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow')
    });

    $('[data-modal=order]').each(function(i){
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog__header').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    });

  });