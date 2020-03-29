$(document).ready(function() {
    var link = $('.menu-link');
    var menu = $('.menu');
    var nav_link = $('.menu a')

    link.click(function() {
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
        return false;
    });
    nav_link.click(function() {
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
        
    });

});

$(document).ready(function() {

    $('.popup__btn').on("click", function(){
        $('.overlay').fadeIn();
        return false;
    });

    $('.popup-close').on("click", function(){
        $('.overlay').fadeOut();
    });

});


 