// Set the timeline to be of the correct height from the first to last marker

$(document).ready(function() {
    //setMarkerArray();
    //console.log(markerArray);
    offsetDiff();
    adjustTimelineHeight();
})

$(window).resize(function() {
    
    // IOS scroll firing resize event unwantedly is already dealt in project autoplay
    offsetDiff()
    //setMarkerArray();
    adjustTimelineHeight();
});

//$(window).on("scroll", adjustTimelineHeight)

var markerArray = [];

function setMarkerArray(){
    markerArray = [];
    var temp = []

    var $markers = $(".year_marker");
    $markers.each(function() { temp.push($(this).offset().top); })

    var $markers = $(".event_marker");
    $markers.each(function() { temp.push($(this).offset().top); })

    temp.sort(function(a, b){return a - b});
    var lowOffset = temp[0];
    markerArray = temp.map( function(value) { 
        return value - lowOffset; 
    } );
}

var lowestOffset = null;
var highestOffset = null;

// Look through all markers and get the difference between the lowest and highest yOffset
function offsetDiff(){
    highestOffset = null;
    lowestOffset = null;
    // Loop through all markers and store the lowest and highest offsetTop
    var $markers = $(".year_marker");
    $markers.each(function() {
        var currentMarkerOffset = $(this).offset().top;
        if (lowestOffset == null){
            lowestOffset = currentMarkerOffset;
            highestOffset = currentMarkerOffset;
        }
        else if (currentMarkerOffset < lowestOffset){
            lowestOffset = currentMarkerOffset;
        }
        else if (currentMarkerOffset > highestOffset){
            highestOffset = currentMarkerOffset;
        }
    })

    var $markers = $(".event_marker");
    $markers.each(function() {
        var currentMarkerOffset = $(this).offset().top;
        if (lowestOffset == null){
            lowestOffset = currentMarkerOffset;
            highestOffset = currentMarkerOffset;
        }
        else if (currentMarkerOffset < lowestOffset){
            lowestOffset = currentMarkerOffset;
        }
        else if (currentMarkerOffset > highestOffset){
            highestOffset = currentMarkerOffset;
        }
    })
}
/*
function adjustTimelineHeight(){
    
    // Set the height of timeline as difference between highest and lowest offset
    var $timeline = $("#timeline");
    var elem = $("body, html");
    var maxScrollTop = elem[0].scrollHeight - $(window).height();
    var percentageScrolled = $(window).scrollTop()/maxScrollTop;
    markerArray.forEach(function (value) {
        var markerPercentage = (value / markerArray[markerArray.length - 1] - 0.01);
        console.log(markerPercentage);
        if (percentageScrolled >= markerPercentage){
            $timeline.height(value);
        }
    });
    //var newMaxHeight = ($(window).scrollTop()/maxScrollTop) * (highestOffset - lowestOffset);
}
*/
function adjustTimelineHeight(){
    var $timeline = $("#timeline");
    $timeline.height(highestOffset - lowestOffset);
}