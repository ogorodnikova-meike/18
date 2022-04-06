
jQuery('.pd_blog_ctn h4').matchHeight();
if($(window).width() > 767) {
  
jQuery('.page-template-template-services .gn_img_1').matchHeight({  byRow: true, });
jQuery('.page-template-template-medical-team .gn_img_1').matchHeight({  byRow: true, });

}

jQuery(document).ready(function(){   
        jQuery('.portfolio_img').each(function(){
            jQuery(this).find('img').hide();
            var _Bg = 'url('+ jQuery(this).find('img').attr('src') + ')';
            jQuery(this).css("background-image", _Bg);
            jQuery(this).find('img').hide();
        }); 
        
    });

$(document).on("scroll", function(){
  var featHeight = $('#pd_banner_slider_carousel').height();
    setTimeout(function(){
      if($(document).scrollTop() > featHeight){
        $("#appoiment_sticky").addClass("show");
      }
    else{
        $("#appoiment_sticky").removeClass("show");
      }
    },300)
  });
jQuery(window).load(function(){   

$("html[lang='en-US'] #pd_video_slider_carousel").owlCarousel({
                    loop:false,
                    margin:10,
                    nav:true,
                    autoplay:true,
                    autoplayTimeout: 7000,
                    dots:false,
                    responsive: {

                        0: {

                            items: 1

                        },



                        600: {

                            items: 2

                        },



                        1024: {

                            items: 2

                        },



                        1366: {

                            items: 2

                        }

                    }
                });


$("html[lang='ar'] #pd_video_slider_carousel").owlCarousel({
                    loop:false,
                    margin:10,
                    nav:true,
                    rtl:true,
                    autoplay:true,
                    autoplayTimeout: 7000,
                    dots:false,
                    responsive: {

                        0: {

                            items: 1

                        },



                        600: {

                            items: 2

                        },



                        1024: {

                            items: 2

                        },



                        1366: {

                            items: 2

                        }

                    }
                });



$("html[lang='en-US'] .pd_video_slider_carousel_sec").owlCarousel({
                    loop:true,
                    margin:10,
                    nav:true,
                    autoplay:true,
                    autoplayHoverPause:true,
                    dots:false,
                    responsive: {

                        0: {

                            items: 1

                        },



                        600: {

                            items: 2

                        },



                        1024: {

                            items: 2

                        },



                        1366: {

                            items: 2

                        }

                    }
                });


$("html[lang='ar'] .pd_video_slider_carousel_sec").owlCarousel({
                    loop:true,
                    margin:10,
                    nav:true,
                    rtl:true,
                    autoplayHoverPause:true,
                    autoplay:true,
                    dots:false,
                    responsive: {

                        0: {

                            items: 1

                        },



                        600: {

                            items: 2

                        },



                        1024: {

                            items: 2

                        },



                        1366: {

                            items: 2

                        }

                    }
                });

var isPageAbuDhabi = false;
if($('body').hasClass('page-template-template-about-sub-abudhabi')) {
var isPageAbuDhabi = true;
}

jQuery("html[lang='en-US'] #pd_img_slider_carousel").owlCarousel({
  autoplay: true,
  dots: true,
  nav: false,
  lazyLoad: true,
  loop: false,
  margin: 20,
  rtl:false,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 4000,
  smartSpeed: 800,
  // nav: true,
  responsive: {
    0: {
      items: 2,
      margin: 10,
      loop: !isPageAbuDhabi
    },

    600: {
      items: 2,
      loop: false,
    },

    1024: {
      items: 3,
      loop: false,
    },

    1366: {
      items: 3,
      loop: false
    }
  }
});



jQuery("html[lang='ar'] #pd_img_slider_carousel").owlCarousel({
  autoplay: true,
  dots: true,
  nav: false,
  lazyLoad: true,
  loop: false,
  margin: 20,
  rtl:true,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 4000,
  smartSpeed: 800,
  // nav: true,
  responsive: {
    0: {
      items: 2,
      margin: 10,
      loop: !isPageAbuDhabi,
    },

    600: {
      items: 2,
       loop: false,
    },

    1024: {
      items: 3,
       loop: false,
    },

    1366: {
      items: 3,
       loop: false
    }
  }
});
       
      

});
jQuery(document).ready(function () {
  
   var checkWidth = $(document).width();
  
  if(checkWidth <=767){
    var ReleaseSlider = $('#home_blog_slider');
     ReleaseSlider.find('.col-lg-4.col-md-4.col-sm-4.col-xs-12').removeClass();
     ReleaseSlider.find('.pd_blog_ctn').each(function(){
      $(this).wrap('<div class="item"></div>');
     });
     jQuery('#home_blog_slider').slick({
            dots: true,
            infinite: false,
            arrows:false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
     
            ]
          });
   }

   jQuery("html[lang='en-US'] .slider_services").slick({
            dots: false,
            infinite: true,
            arrows:true,
            speed: 300,
            autoplay:true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
     
            ]
          });

   jQuery("html[lang='ar'] .slider_services").slick({
            dots: false,
            infinite: true,
            arrows:true,
            speed: 300,
            cssEase: 'linear',
            rtl: true,
            autoplay:true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
     
            ]
          });

});


  
  function containerWidth() {
    
      var Width = $(".container").outerWidth();
      var winwidth = $(window).width();
      var Diff = (winwidth-Width)/2;


      $('#pd_banner_slider_carousel').css('padding-left', Diff +'px');
      $('#pd_banner_slider_carousel .pd_banner_ctn ').css('opacity','1');


    }

   $(document).ready(function(){

    containerWidth();
 }); 
   $(window).resize(function(){
    containerWidth();
 }); 

window.dispatchEvent(new Event('resize'));
    
 jQuery('.counter').counterUp({

        delay: 10,

        time: 2500

    });