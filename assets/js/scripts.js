$(document).ready(function() {
    $('.jlove-link').click(function(e) { e.preventDefault(); $('#jlove_gallery a:first-child').click(); });
    $('.livweal-link').click(function(e) { e.preventDefault(); $('#livweal_gallery a:first-child').click(); });
    $('.autogrow-link').click(function(e) { e.preventDefault(); $('#autogrow_gallery a:first-child').click(); });
    $('.cbo-link').click(function(e) { e.preventDefault(); $('#cbo_gallery a:first-child').click(); });
    $('.dcb-link').click(function(e) { e.preventDefault(); $('#dcb_gallery a:first-child').click(); });
    $('.brooklyn-link').click(function(e) { e.preventDefault(); $('#brooklyn_gallery a:first-child').click(); });
    $('.brookvale-link').click(function(e) { e.preventDefault(); $('#brookvale_gallery a:first-child').click(); });
    $('.the-fold-link').click(function(e) { e.preventDefault(); $('#the_fold_gallery a:first-child').click(); });
    $('.wvw-link').click(function(e) { e.preventDefault(); $('#wvw_gallery a:first-child').click(); });
    $('.equipmed-link').click(function(e) { e.preventDefault(); $('#equipmed_gallery a:first-child').click(); });
    $('.scv-link').click(function(e) { e.preventDefault(); $('#scv_gallery a:first-child').click(); });
    $('.permagard-link').click(function(e) { e.preventDefault(); $('#permagard_gallery a:first-child').click(); });
    $('.empress-diamonds-link').click(function(e) { e.preventDefault(); $('#empress_diamonds_gallery a:first-child').click(); });
    $('.click-therapy-link').click(function(e) { e.preventDefault(); $('#click_therapy_gallery a:first-child').click(); });
    $('.macquarie-link').click(function(e) { e.preventDefault(); $('#macquarie_gallery a:first-child').click(); });
    $('.caydon-link').click(function(e) { e.preventDefault(); $('#caydon_gallery a:first-child').click(); });
    $('.one-lygon-link').click(function(e) { e.preventDefault(); $('#one_lygon_gallery a:first-child').click(); });
    $('.schepisi-link').click(function(e) { e.preventDefault(); $('#schepisi_gallery a:first-child').click(); });
    $('.ilikewine-link').click(function(e) { e.preventDefault(); $('#i_like_wine_gallery a:first-child').click(); });
    $('.ineedachef-link').click(function(e) { e.preventDefault(); $('#i_need_a_chef_gallery a:first-child').click(); });
    $('.iformatbc-link').click(function(e) { e.preventDefault(); $('#iformat_bc_gallery a:first-child').click(); });
    $('.safe-search-link').click(function(e) { e.preventDefault(); $('#safe_search_gallery a:first-child').click(); });
    $('.you-parodies-link').click(function(e) { e.preventDefault(); $('#you_parodies_gallery a:first-child').click(); });
    $('.enviro-search-link').click(function(e) { e.preventDefault(); $('#enviro_search_gallery a:first-child').click(); });
    $('.aura-link').click(function(e) { e.preventDefault(); $('#aura_gallery a:first-child').click(); });
    $('.iformat-link').click(function(e) { e.preventDefault(); $('#iformat_gallery a:first-child').click(); });
    

    // $('#jlove_gallery').each(function() { 
    //     $(this).magnificPopup({
    //         delegate: 'a', 
    //         type: 'image',
    //         gallery: {
    //           enabled:true
    //         }
    //     });
    // });

    $('#jlove_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#livweal_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#autogrow_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#cbo_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#dcb_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#brooklyn_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#brookvale_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#the_fold_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#wvw_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#equipmed_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#scv_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#permagard_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#empress_diamonds_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#click_therapy_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#macquarie_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#caydon_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#one_lygon_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#schepisi_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#i_like_wine_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#i_need_a_chef_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#iformat_bc_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#safe_search_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#you_parodies_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#enviro_search_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#aura_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
    $('#iformat_gallery').each(function() { $(this).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled:true } }); });
});

// Check for standard method in different browsers
function launchFullScreen(element) {
    if (!document.fullscreenElement &&    // Standard API
        !document.mozFullScreenElement && // Firefox
        !document.webkitFullscreenElement && // Chrome, Safari and Opera
        !document.msFullscreenElement) {  // IE/Edge
        // Enter fullscreen
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { /* Firefox */
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { /* IE/Edge */
            element.msRequestFullscreen();
        }
    } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    }
}


// Call the function to make the whole document full screen
document.getElementById("toggle_fullscreen").addEventListener("click", function(event) {
    event.preventDefault();
    launchFullScreen(document.documentElement);
});

document.getElementById("menu_item_about").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("about_container").classList.add("active");
});

document.getElementById("menu_item_skills").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("skills_container").classList.add("active");
});

document.getElementById("menu_item_projects").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("projects_container").classList.add("active");
});

document.getElementById("menu_item_stuffs").addEventListener("click", function(event) {
    event.preventDefault();
    // document.getElementById("contact_container").classList.add("active");
    Swal.fire({
        title: "Under Construction",
        text: "I plan on placing some of my random works here.",
        icon: "info"
    });
});

document.getElementById("menu_item_theme").addEventListener("click", function(event) {
    event.preventDefault();
    // document.getElementById("contact_container").classList.add("active");
    Swal.fire({
        title: "Under Construction",
        text: "This will be available if I have one more design other than this.",
        icon: "info"
    });
});
document.getElementById("menu_item_contact").addEventListener("click", function(event) {
    event.preventDefault();
    // document.getElementById("contact_container").classList.add("active");
    Swal.fire({
        title: "Under Construction",
        text: "In Progress",
        icon: "info"
    });
});
    
const close_section = (event) => {
    event.preventDefault();
    // Select all elements with the class .section_container
    var containers = document.querySelectorAll('.section_container');

    // Loop through the NodeList and remove the active class
    containers.forEach(function(container) {
        container.classList.remove('active');
    });
}