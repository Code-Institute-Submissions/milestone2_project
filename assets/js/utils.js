$(window).on('load resize', function(d){
    var w = $('svg').height();
    var h = w * 2 + 250;
    $('#regionCountChart').css('height', h); 
});
function resizeButtons(selector){
    var selector = selector;
    var maxheight;
    $(selector).each(function(){
        var initheight = 0;
        var h = $(this).height();
        if(maxheight == null){
            if(h > initheight){
                maxheight = h;
            }
        }
        else{
            if(h > maxheight){
                maxheight = h;
            }
        }
    });
   
    $(selector).each(function(){
        $(this).css('height', maxheight + 8);
    })
    if($('.master_reset').length > 1){
        $('.master_reset:first').remove();
    }
}

function scrollButtons(){

        $('.regSelect').css('display', 'none');
        var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

        //!!!!!!! In the end this will not work as javascript is not capable of associative arrays!!!!!!!!!!
        // var a = [];
        // var pagination = {}
        // $('.regSelect').each(function(){
        //     // console.log($this);
        //     var c = $(this).val();
        //     a.push(c.charAt(0));
        // });
        // console.log(a.length);
        
        // console.log(letters.length);
        //Loop through and count
        
        // for(var i =0;i<letters.length;i++){
        //     var num = 0;
        //     for(var t=0;t<a.length;t++){
                
        //         if(letters[i].toUpperCase() === a[t]){
        //             num++
        //         }
            
        //     }
        //     pagination[letters[i]]= num;
            
        // }
        
        
        for (var l in letters) {
            $('#button_container').append("<button class=\"btn letterbutton btn-success halfwidth btnanimation\" data-let=\""+letters[l].toUpperCase()+"\">"+letters[l].toUpperCase()+"</button>");
        }
        $('#button_container').append("<button class=\"btn btn-warning reset\">BACK</button>");
        // Initially hide the back button and move the main reset button
        $('.reset').css('display', 'none');
        
    
    $('.reset').on('click', function(){
        $('.regSelect').css('display', 'none');
        $('.reset').css('display', 'none');
        $('.master_reset').css('display','block')
        $('.letterbutton').css('display', 'inline-block');
    });

    $('.letterbutton').on('click', function(){
        var let = $(this).data('let');
        $('.regSelect').each(function(index, element){
            var t = $(this).val().charAt(0);
            if(t.toUpperCase() === let){
                $(this).css('display', 'inline-block');
                $('.letterbutton').css('display', 'none');
                $('.reset').css('display', 'block');
                $('.master_reset').css('display','none')
                
            }
            else{
                $(this).css('display', 'none');
                
            }
        });
    });
}

function removeexcessticks(){
    var cv;
    //Apply first and last classes, since these are always needed
    $('#regionCountRowChart svg g.tick:first').addClass('FirstTick');
    $('#regionCountRowChart svg g.tick:last').addClass('LastTick');
    
    //Grab the first and last values, so we can compare against
    //NOT NEEDED
    // var firstVal = $('#regionCountRowChart svg g.tick:first').text();
    // var lastVal = $('#regionCountRowChart svg g.tick:last').text();
    
    //Now we loop through the remaining ticks
    $.each($('#regionCountRowChart svg g.tick'), function(){
       var val = $(this).text();
       
       console.log (cv == val);
        if(cv == null){
            cv = val;
         }
         else{
             if($(this).hasClass('firstTick') || $(this).hasClass('LastTick')){

             }
             else{
                $(this).addClass('Innertick')
            }
           
            }
         }
    );

    $('.Innertick').remove();
}
// Function below courtsey of MicronXD via https://stackoverflow.com/questions/10989695/stop-div-scrolling-once-it-reaches-another-div

//This has not been used within the project, but it is worth noting as it stops a div with a fixed position from scrolling past a certain element id
var windw = this;

$.fn.followTo = function ( elem ) {
    var $this = this,
        $window = $(windw),
        $bumper = $(elem),
        bumperPos = $bumper.offset().top,
        thisHeight = $this.outerHeight(),
        setPosition = function(){
            if ($window.scrollTop() > (bumperPos - thisHeight)) {
                $this.css({
                    position: 'absolute',
                    top: (bumperPos - thisHeight)
                });
            } else {
                $this.css({
                    position: 'fixed',
                    top: 0
                });
            }
        };
    $window.resize(function()
    {
        bumperPos = pos.offset().top;
        thisHeight = $this.outerHeight();
        setPosition();
    });
    $window.scroll(setPosition);
    setPosition();
};
