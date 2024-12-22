
$(function() {
  $(".hamburger-menu-icon-wrap").click(function(){
    $('.hamburger-menu-line').toggleClass('open'); 
    $('.hamburger-menu').toggleClass('no-display');

    if ($('.hamburger-menu-line').hasClass('open')) {
      bodyFixedOn();
      $('.header-search-wrap').toggleClass('hidden');
    }
    else {
      bodyFixedOff();
      $('.header-search-wrap').toggleClass('hidden');
    }
  });
});

$('.__faq-q').click(function() {
  const answer = $(this).parent('.__faq-item').children('.__faq-a');
  const icon = $(this).parents('.__faq-item').find('.__item-collapse__mark');

  if (answer.css('height') === '0px') {
      console.log('Expanding the answer section');
      answer.css('height', 'auto');
      answer.css('padding-top', '25px');
      answer.css('padding-bottom', '25px');
      icon.addClass('open');
  } else {
      // Adding console log to check the flow
      console.log(answer);

      answer.css('height', '0');
      answer.css('padding-top', '0');
      answer.css('padding-bottom', '0');
      icon.removeClass('open');
  }
});



$(function() {
  $('.modal-close').click(function() {
    $('.hamburger-menu-line').removeClass('open');
    $('.hamburger-menu').addClass('no-display');
    $('.header-search-menu-wrap').addClass('no-display');
    $('.header-menu-wrap').removeClass('no-display');
    $('.modal-mask').addClass('no-display');
    bodyFixedOff();
  });
});


$(function() {
  $(".open-modal-btn").click(function(){
    $('.header-search-menu-wrap').toggleClass('no-display');
    $('.hamburger-menu').toggleClass('hidden');
    $('.hamburger-menu').removeClass('no-display');
    
    if (!$('.header-search-menu-wrap').hasClass('no-display')) {
      bodyFixedOn();
      $('.header-menu-wrap').addClass('no-display');
      $('.modal-mask').removeClass('no-display');
    }
    else {
      bodyFixedOff();
      $('.header-menu-wrap').removeClass('no-display');
      $('.modal-mask').addClass('no-display');
    }
  });
});



$(document).ready(function() {
  // Initialize the slider
  $('.about-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Autoscroll every second
    responsive: [
        {
            breakpoint: 768,  // At 768px or greater
            settings: {
                slidesToShow: 1,  // Show only one slide
                slidesToScroll: 1  // Ensure scrolling only one slide
            }
        }
    ]
  });



  // Custom next button for Slick slider
  $('.__slider-next').on('click', function(e) {
      e.preventDefault();  // Prevent the default anchor click behavior
      $('.__main-slider').slick('slickNext');  // Move to the next slide
  });
  // Custom next button for Slick slider
  $('.__slider-before').on('click', function(e) {
    e.preventDefault();  // Prevent the default anchor click behavior
    $('.__main-slider').slick('slickPrev');  // Move to the previous slide
  });



  

});


$(document).ready(function() {
  function initSlick() {
      if ($(window).width() <= 768 && !$('.badge-slider').hasClass('slick-initialized')) {
          $('.badge-slider').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              autoplaySpeed: 1000 // Autoscroll every second
          });
      } else if ($(window).width() > 768 && $('.badge-slider').hasClass('slick-initialized')) {
          $('.badge-slider').slick('unslick');
      }
  }

  // Initialize or destroy Slick based on the window size
  initSlick();
  
  // Recheck on window resize
  $(window).resize(initSlick);

}); 


$(document).ready(function() {
  var header = $('.c-header__inner'); // Get the header element
  var headerOffset = header.offset().top; // Get the initial top offset of the header

  $(window).scroll(function() {
      var scrollPos = $(window).scrollTop(); // Get the current vertical position of the scroll bar

      if (scrollPos >= headerOffset) {
          header.addClass('fixed-header');
      } else {
          header.removeClass('fixed-header');
      }
  });


});

