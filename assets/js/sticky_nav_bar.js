// Implement sticky navigation bar on scroll

var navbar = document.getElementById("nav");
var main = document.getElementById("main");
var navbarOriginalHeight = 0;
var navbarTopOffset = navbar.offsetTop;

var isNavbarStickied = false;

var windowWidth = 0;
var windowHeight = 0;

var navbarSpanTopOffset = 0;
var navbarSpans = $(".icon");

$(document).ready(function() {
    $(window).scrollTop(0);
    
    windowWidth = $(window).width();
    windowHeight = $(window).height();

    
    navbarSpans = $(".icon");
    // Set the nav label back to above the icon to calculate navBarSpanTopOffset
    navbarSpans.each(function() {
        $(this).children().removeClass("nav_span_sticky");
    });

    var firstNavbarSpan = $(".icon").first().children().first();
    navbarSpanTopOffset = firstNavbarSpan.offset().top;
    
    resetNavBarSticky();
    checkNavLabelPosition();

    window.addEventListener('scroll', stickyNavBar);
    window.addEventListener('scroll', checkNavLabelPosition);
})


$(window).on( "orientationchange", function( event ) {
    // On orientation change (potrait/landscape)
    // navbarTopOffset needs to be recalculated
    if (isNavbarStickied){
        var activeTab = document.getElementsByClassName("active_no_arrow")[0];
        activeTab.classList.remove("active_no_arrow");
        activeTab.classList.add("active");
    }
    resetNavBarSticky();
});

$(window).resize(function() {
    
    // Deals with IOS scroll firing resize event unwantedly
    if (windowWidth != $(window).width() && windowHeight != $(window).height()){
        // When window has been resized
        // navbarTopOffset needs to be recalculated
        windowWidth = $(window).width();
        windowHeight = $(window).height();
        if (isNavbarStickied){
            var activeTab = document.getElementsByClassName("active_no_arrow")[0];
            activeTab.classList.remove("active_no_arrow");
            activeTab.classList.add("active");
        }
        resetNavBarSticky();
    }
    
});

function stickyNavBar() {
    if (window.pageYOffset > navbarTopOffset && !isNavbarStickied) {

        navbarOriginalHeight = $("nav").outerHeight(true);

        navbar.classList.add("sticky_nav");
        main.style.marginTop = navbarOriginalHeight + "px";
        
        var activeTab = document.getElementsByClassName("active")[0];
        if (activeTab){
            activeTab.classList.remove("active");
            activeTab.classList.add("active_no_arrow");
        }
        
        isNavbarStickied = true;
        
    } else if (window.pageYOffset <= navbarTopOffset && isNavbarStickied) {

        navbar.classList.remove("sticky_nav");
        main.style.marginTop = 0;
        
        var activeTab = document.getElementsByClassName("active_no_arrow")[0];
        if (activeTab){
            activeTab.classList.remove("active_no_arrow");
            activeTab.classList.add("active");
        }
        
        isNavbarStickied = false;
    }

}

function checkNavLabelPosition(){
    if (navbarSpanTopOffset - $(window).scrollTop() <= 0){
        // switch to bottom
        // how to know when to switch to top? when unstickied?
        navbarSpans.each(function() {
            if ($(this).children().is("span")){ $(this).children().addClass("nav_span_sticky"); }
            
        });
    }
    else {
        navbarSpans.each(function() {
            $(this).children().removeClass("nav_span_sticky");
        });
    }

}

function resetNavBarSticky(){
    navbar.classList.remove("sticky_nav");
    main.style.marginTop = 0;
    setTimeout(() => {
        // Recalculate navbarTopOffset for new tab/orientation that user has switched to
        navbarTopOffset = navbar.offsetTop;
        isNavbarStickied = false;
        stickyNavBar();
    }, 250);
    
}