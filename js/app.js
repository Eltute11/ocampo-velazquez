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
      nav:false,
      dots:false,
      items:1,
      autoplay:true, 
      autoplayTimeout:5000, 
      autoplayHoverPause:true,
      animateOut: 'fadeOut',
      lazyLoad: false,
      responsive:{
        768:{
          nav:true
        }
      }
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

    $('.owl-estudio').owlCarousel({
      items:1,
      autoplay:true
    });

    // LIGHTBOX
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'albumLabel': 'Imagen %1 de %2'
    })

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

    // Boton de listado de soluciones en mobile
    var list = $('.list');
    $('#btn-list').click(function() {
  
      if(list.hasClass('show')){
        list.removeClass('show');
      }else{
        list.addClass('show');
      }
    });

    // SCROLL
    $("a.to-scroll").on('click',function(e) {
      var url = e.target.href;
      var hash = url.substring(url.indexOf("#")+1);
      $('html, body').animate({
          scrollTop: $('#'+hash).offset().top
      }, 700);
      return false;
    });  
    
});

// Contact
function contact_footer(){
  $.ajax({
    method:"POST",
    url: "send-footer.php",
    data: $("#contact-footer").serialize(),
    beforeSend: function () {
      jQuery("#btn_enviar_footer").val("Procesando");
    },
    complete:function(datos){
      jQuery("#btn_enviar_footer").val("Enviar");
    },
    success:function(datos){
      $("#resultado-footer").html(datos);
    },
    error: function(datos){
      $("#resultado-footer").html("<div class='alert alert-danger' role='alert'>Error en el envio del formulario</div>");
    }
  });
};

function contact_body(){
  $.ajax({
    method:"POST",
    url: "send-body.php",
    data: $("#contact-body").serialize(),
    beforeSend: function () {
      jQuery("#btn_enviar_body").val("Procesando");
    },
    complete:function(datos){
      jQuery("#btn_enviar_body").val("Enviar");
    },
    success:function(datos){
      $("#resultado-body").html(datos);
    },
    error: function(datos){
      $("#resultado-body").html("<div class='alert alert-danger' role='alert'>Error en el envio del formulario</div>");
    }
  });
};