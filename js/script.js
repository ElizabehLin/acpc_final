$(document).ready(function () {
    
    $(".navbar-brand").hover(function(){$(this).addClass("animated").addClass("tada")},function(){$(this).removeClass("animated").removeClass("tada")});
    
    $(".nav-link").hover(function(){$(this).addClass("animated").addClass("rubberBand")},function(){$(this).removeClass("animated").removeClass("rubberBand")});
    
    $(".down_btn_item").hover(function(){$(this).addClass("animated").addClass("pulse")},function(){$(this).removeClass("animated").removeClass("pulse")});
    
    $(".shake").hover(function(){$(this).addClass("animated").addClass("tada")},function(){$(this).removeClass("animated").removeClass("tada")});
    
    
     $(function(){ $('.sporty_btn').click(function(){ 
        $('html,body').animate({scrollTop:$('#idOne').offset().top-200}, 500);});  
    });
    $(function(){ $('.civic_btn').click(function(){ 
        $('html,body').animate({scrollTop:$('#idTwo').offset().top-200}, 500);});  
    });
    $(function(){ $('.rustic_btn').click(function(){ 
        $('html,body').animate({scrollTop:$('#idThree').offset().top-200}, 500);});  
    });
});
