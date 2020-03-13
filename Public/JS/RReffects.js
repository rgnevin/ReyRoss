$(document).ready(function(){
    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();
    
    

    var target = this.hash;
    var $target = $(target);

    //scorll and show hash

    $('html, body').animate({
        'scrollTop': $target.offset().top
    }, 1000, 'swing',function() {
            window.location.hash = target;
     });
    
    });
});

$(window).scroll(function(){ 
   var s = $(window).scrollTop();
    console.log(s);
    if(s>650){
             $("nav").addClass("bg-light");
             console.log("hello");
             $("#RRbrand").addClass("visi");     
    } else{
        $("nav").removeClass("bg-light");
        $("#RRbrand").removeClass("visi");
        
    };

});
