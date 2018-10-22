/*global $*/

$(function(){
    "use strict"
    
    
    //Set header height as same as window height
    
    var nav_h = $(".navbar").innerHeight();
    var win_h = $(window).innerHeight();  
    $(".header").height(win_h - nav_h);
    
    
    // Hide Placeholder
    
    $('[placeholder]').focus(function() {
    $(this).attr('data-text', $(this).attr('placeholder'));
    $(this).attr('placeholder', '');
    $('.contact i').hide();
  }).blur(function() {
    $(this).attr('placeholder', $(this).attr('data-text'));
        $('.contact i').show();
  });
    
    
    
    // initailize of WOW Animation

    new WOW().init();
    
});


    //Spinner loading when window is loading
    
    $(window).on('load', function(){        
        
        //loading elements
        
        $(".loading-overlay .spinner").fadeOut(2000,function(){
            
            $(this).parent().fadeOut(2000);
            
            $("body").css("overflow","auto"); //Show the Scroll 
        });
        
        //Calculate Body Padding Top Depend on Navbar Height to let scroll of navbar is exactly
        
        $('body').css('paddingTop', $('.navbar').innerHeight() + $('.block').css('paddingTop', $('.navbar').innerHeight()));
        
        // Scroll To Element (Smooth Scroll)
        
        $(".navbar li a").click(function(e){ //use e to prevent link to go to the page of it when click on it
            
            e.preventDefault();
            
            $("html,body").animate({ //animation to html and body
                
                scrollTop:$("#" + $(this).data('scroll')).offset().top+1
                
            },1000);
            
            $(this).addClass("active").parent().siblings().find('a').removeClass("active");
            
            
        });
        
        //Syncronize Navbar Links With Sections(Tazamon)
        
        $(window).scroll(function(){
            
            $(".block").each(function(){
                if($(window).scrollTop() > $(this).offset().top){
                    
                    //put id of this section in variable
                    
                    var blockID = $(this).attr("id");
                    
                    // data-scroll of links
                    
                    $('.navbar a').removeClass('active'); // when click  link is activate
                    
                    //any link of navbar this data-scroll is equal section id and put active on it 
                    
                    $('.navbar li a[data-scroll="'+blockID+'"]').addClass('active');
                    
                    
                }
                
            });
            
        });
        
        
        
        
        
    });
        
        
