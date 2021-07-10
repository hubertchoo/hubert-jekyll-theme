
// Autoplay Project preview videos on scroll

$(document).ready(function() {
    
   // Autoplay video when scrolled
   checkMedia(); // for reset/open on the project tab itself
        
   // IOS Low Power Mode does not allow MP4 to autoplay
   // unless user interaction is detected
   // Hence we use listener touchstart which will then allow us to play MP4
   window.addEventListener('scroll', checkMedia)
   window.addEventListener('touchstart', playAllMedia)
   
})

// Function to pause all media when switched to another tab
function resetAllProjectMedia() {
    var media = $(".proj_vid");
    media.each(function() {
        $(this).get(0).pause();
    });
    checkMedia();
}

function checkMedia() {
    var media = $(".proj_vid");
    var tolerancePixel = 40;
    // Get current browser top and bottom
    var scrollTop = $(window).scrollTop() + tolerancePixel;
    var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

    media.each(function() {
        var yTopMedia = $(this).offset().top;
        var yBottomMedia = $(this).height() + yTopMedia;

        if (scrollTop < yBottomMedia && scrollBottom > yTopMedia){
            if (!$(this).get(0).playing) {$(this).get(0).play();}
        }
        else {
            $(this).get(0).pause();
            $(this).get(0).currentTime = 0;
        }
    });
}

// Might not be optimal for large amounts of media
// Since each screen touch will trigger playing then pausing of media
// But this allows media to be playing immediately when Work tab is selected
function playAllMedia(){
    var media = $(".proj_vid");
    media.each(function() {
        $(this).get(0).play();
    });
    checkMedia();
}
