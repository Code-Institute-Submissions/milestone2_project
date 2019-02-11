$(window).on('load resize', function(d){
    var w = $('svg').height();
    var h = w * 2 + 250;
    // console.log(w);
    // console.log(h);
    
    
    $('#regionCountChart').css('height', h);
});