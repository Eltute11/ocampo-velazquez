jQuery(function($) {

    // HEADER
    $(".mobile-inner-header-icon").click(function(){
      $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
      $(".mobile-inner-nav").slideToggle(250);              
    });

    $(".mobile-inner-nav a").each(function( index ) {
      $( this ).css({'animation-delay': (index/10)+'s'});
    });

    // CAROUSEL
    $("#owl-hero").owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      dots:false,
      items:1,
      autoplay:true, 
      autoplayTimeout:5000, 
      autoplayHoverPause:true,
      animateOut: 'fadeOut',
      lazyLoad: true
    });

    $("#owl-services").owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      dots:true,
      items:1,
      autoplay:true, 
      autoplayTimeout:4000, 
      autoplayHoverPause:true,
      margin: 30,
      responsive:{
        768:{
            items: 2,
        },
        1200:{
          items: 3,
        }
      }
    });

    $("#owl-team-home").owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      dots:false,
      items:1,
      autoplay:true, 
      autoplayTimeout:5000, 
      autoplayHoverPause:true,
      lazyLoad: true,
      responsive:{
        768:{
            nav: true,
            items: 2,
            margin: 20,
        },
        992:{
          nav: true,
          items: 1,
      }
      }
      // animateOut: 'fadeOut'
    });

    $("#owl-team").owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      dots:false,
      items:1,
      autoplay:true, 
      autoplayTimeout:5000, 
      autoplayHoverPause:true,
      lazyLoad: true,
      responsive:{
        768:{
            nav: true,
            items: 2,
            margin: 30,
        },
        992:{
          nav: true,
          items: 3,
          margin: 30,
      }
      }
      // animateOut: 'fadeOut'
    });

    // PARALLAX
    var ancho = $(window).width();
    // Si trabajamos con una imagen desactivamos el background-size:cover;
    if (ancho <= 768){
      $('.banner').css({
        'background-attachment': 'scroll'
      });
    }else{
      // Resto del código parallax
      $(window).scroll(function(){
        var barra = $(window).scrollTop();
        var posicion = barra * 0.04;

        $('.banner').css({
          'background-position': '0 -' + posicion + 'px'
        });
      });
    }

    
});