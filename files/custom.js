$(document).ready(function() {
    // alert("test");
    init_menu_start();
    init_click_outside();
});

function init_menu_start() {
    $('#menu_start').click(function() {
        if($('#menu_block').hasClass("active")) {
            $('#menu_block').removeClass("active");
        } else {
            $('#menu_block').addClass("active");
        }
    });
}

function init_click_outside() {
    // $(document).click(function(event) { 
    //     var $target = $(event.target);
    //     if(!$target.closest('#menu_block').length && 
    //     $('#menu_block').hasClass("active")) {
    //       $('#menu_block').removeClass("active");
    //     }        
    // });
}