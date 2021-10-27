/*global $ */

$(document).ready(function () {
    
    'use strict';
    
    $('html').niceScroll();
    
   
    $('.carousel').carousel({
        
        interval: 20000
    });
    
    
    $('.toolicon').click(function () {
        
        $('.color').fadeToggle();
    
    });
    
    
    
//   change color options 
    
    
    $('.color ul li')
    
        .eq(0).css('backgroundColor', '#e41b17').end()
        .eq(1).css('backgroundColor', '#18beda').end()
        .eq(2).css('backgroundColor', '#ce1d7d').end()
        .eq(3).css('backgroundColor', '#449d44').end()
        .eq(4).css('backgroundColor', '#af0882');
  
    
    
    $('.color ul li').click(function () {
       
      
       
        $("link[href*='theme']").attr('href', $(this).attr('data-color'));
       
    });
    
    
    // show hide the scrolling button 
    
    
    $(window).scroll(function () {
        
       
       
        if ($(this).scrollTop() >= 800) {
            
            $('#up').show();
        } else {
            
            $('#up').hide();
            
        }
        
    });
    
    
        // scroll up 
        
    $('#up').click(function () {
            
        $('html,body').animate({scrollTop : 0 }, 1200);
                        
    });

});



// loading screen

$(window).load(function () {
    
    'use strict';
    
    $('body').css('overflow', 'auto');
    $('.loading').delay(50).fadeOut(50);
    
    
});