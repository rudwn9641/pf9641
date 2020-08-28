$(document).ready(function(){

    $(".menu>li").on("mouseover", function(){
        $(".sub").stop().slideDown();
        $(".menuWrap").stop().slideDown();
    });
    $(".menu>li").on("mouseleave", function(){
        $(".sub").stop().slideUp();
        $(".menuWrap").stop().slideUp();
    });

    var slideImg = $(".visual");
    var slides = slideImg.find(">div");
    var currentIndex = 0;
    var slideCount = slides.size();

    function showNext(){
        var nextIndex = (currentIndex +1) % slideCount;
        slides.eq(currentIndex).fadeOut(500);
        slides.eq(nextIndex).fadeIn(500);
        currentIndex = nextIndex;
    }

    setInterval(showNext, 3000);
    
});