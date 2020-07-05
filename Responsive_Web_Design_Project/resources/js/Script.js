
$(document).ready(function() {

  /* ====== For the sticky navigation ===========================================================*/

      $('.js--section-features').waypoint(function(direction) {
          if (direction == "down") {
              $('nav').addClass('sticky');
          } else {
              $('nav').removeClass('sticky'); 
          }

      }, {
            offset: '60px;'
        });
         

 /* ======Scroll on buttons ======================================================================================== */
 

    $('.js--scroll-to-plans').click(function() {
                $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
            });

    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);

    });


    /* ====== Navigation scroll ======================================================================================== */
  

    $('.js--scroll-to-features').click(function(){
      $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);

    });

    $('.js--scroll-to-works').click(function(){
      $('html, body').animate({scrollTop: $('.js--section-steps').offset().top}, 1000);
    });

    $('.js--scroll-to-cities').click(function(){
      $('html, body').animate({scrollTop: $('.js--section-cities').offset().top}, 1000);
    });

    $('.js--scroll-to-sign-up').click(function(){
      $('html, body').animate({scrollTop: $('.js--section-sign-up').offset().top}, 1000);
    });

    /* ====== Navigation scroll ======================================================================================== */


    
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 500);
            return false;
          }
        }
      });
    });

    

    /* ====== Animation on scroll ======================================================================================== */

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
      $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
      $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
      $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    /* ====== Mobile Navigation ======================================================================================== */ 

    $('.js--nav-icon').click(function(){
      var nav = $('.js--main-nav');
      var icon = $('.js--nav-icon i');

      nav.slideToggle(200); /* To open and close a box */
      
      if (icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
      } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
      }
    }); 

  /* ====== MAPS ======================================================================================== */ 

  var map = new GMaps({
    div: 'map',
    lat: 6.61479,     
    lng: 3.646616,
    zoom: 12
  });

    map.addMarker({
    lat: 6.623383,      
    lng: 3.4898847,
    title: 'Majekobaje Street, off Asolo Bus-Stop',
    infoWindow: {
      content: '<p>Agric Bus-Terminal .<br>. Our Office Address</p>'
    }
  });

});



