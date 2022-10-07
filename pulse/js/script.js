$(document).ready(function(){
    $('.carousel__inner').slick({
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrLeft.svg"</button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrRight.svg"</button>'
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.card__content').eq(i).toggleClass('card__content_active');
          $('.card__list').eq(i).toggleClass('card__list_active');
        });
      });
    };

    toggleSlide('.card__link');
    toggleSlide('.card__back');
  

//modal

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
  $('.button_mini').on('clicl', function() {
    $('.overlay, #order').fadeIn('slow');
  });
  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i))
    });
  });

  //validation

  $('#consultation-form').validate();
  $('#consultation form').validate();
  $('#order form').validate();
});


