$(window).on('load resize', function(d){
    var w = $('svg').height();
    var h = w * 2 + 250;
    $('#regionCountChart').css('height', h);
    var contSize = $('#content').height();
    // $('#mainfooter').css('margin-top', contSize/2 );
  
    
});
function resizeButtons(selector){
    var selector = selector;
    var maxheight;
    $(selector).each(function(){
        var initheight = 0;
        var h = $(this).height();

        // console.log(initheight >= h)
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
       
        // console.log("Height is :" + h);
    });
    // console.log(maxheight)
    $(selector).each(function(){
        $(this).css('height', maxheight + 8);
    })
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
    console.log("BOB");
    //Apply first and last classes, since these are always needed
    $('#regionCountRowChart svg g.tick:first').addClass('FirstTick');
    $('#regionCountRowChart svg g.tick:last').addClass('LastTick');
    
    //Grab the first and last values, so we can compare against
    var firstVal = $('#regionCountRowChart svg g.tick:first').text();
    var lastVal = $('#regionCountRowChart svg g.tick:last').text();
    
    //Now we loop through the remaining ticks
    $.each($('#regionCountRowChart svg g.tick'), function(){
       var val = $(this).text();
       
       console.log (cv == val);
        if(cv == null){
            console.log("CV NULL");
             cv = val;
         }
         else{
             $(this).addClass('InnerTick');
             if(val === cv){
                $(this).next().addClass('valMatch')
             }
             else{
                $(this).addClass('noMatch')
                cv = val;
             }
            }
         }
    );

     $('.InnerTick').not('.firstTick').not('.LastTick').remove();
   // $('.tick').not('.LastTick').remove();
    // $('.duplicate').not(':last').remove();
   
}
// Function below courtsey of MicronXD via https://stackoverflow.com/questions/10989695/stop-div-scrolling-once-it-reaches-another-div
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
