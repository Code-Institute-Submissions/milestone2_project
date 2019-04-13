$(window).on('load resize', function(d){
    var w = $('svg').height();
    var h = w * 2 + 250;
    $('#regionCountChart').css('height', h); 
});
function resizeButtons(element){
    var selector = element;
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
    });
    if($('.master_reset').length > 1){
        $('.master_reset:first').remove();
    }
}

function scrollButtons(){

        $('.regSelect').css('display', 'none');
        var letters = 'abcdefghijklmnopqrstuvwxyz';
        if(typeof(letters) == 'string'){
            var alphabet = letters.split('');
            for (var l in alphabet) {
                if(typeof(alphabet[l]) == 'string'){
                    $('#button_container').append("<button class=\"btn letterbutton btn-success halfwidth btnanimation\" data-let=\""+alphabet[l].toUpperCase()+"\">"+alphabet[l].toUpperCase()+"</button>");
                }
            }
        }
        
        $('#button_container').append("<button class=\"btn btn-warning reset\">BACK</button>");
        // Initially hide the back button and move the main reset button
        $('.reset').css('display', 'none');
        
    
    $('.reset').on('click', function(){
        $('.regSelect').css('display', 'none');
        $('.reset').css('display', 'none');
        $('.master_reset').css('display','block');
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
                $('.master_reset').css('display','none');
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
    //Now we loop through the remaining ticks
    $.each($('#regionCountRowChart svg g.tick'), function(){
       var val = $(this).text();
        if(cv == null){
            cv = val;
         }
         else{
             if($(this).hasClass('firstTick') || $(this).hasClass('LastTick')){

             }
             else{
                $(this).addClass('Innertick');
            }
           
            }
         }
    );

    $('.Innertick').remove();
}
