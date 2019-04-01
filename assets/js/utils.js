$(window).on('load resize', function(d){
    var w = $('svg').height();
    var h = w * 2 + 250;
    // console.log(w);
    // console.log(h);
    $('#regionCountChart').css('height', h);
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
    var count = $('.regSelect').size();
    if(count > 10){
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
        
    }
    $('.reset').on('click', function(){
        $('.regSelect').css('display', 'none');
        $('.letterbutton').css('display', 'inline-block');
    });

    $('.letterbutton').on('click', function(){
        var let = $(this).data('let');
        $('.regSelect').each(function(index, element){
            var t = $(this).val().charAt(0);
            if(t.toUpperCase() === let){
                $(this).css('display', 'inline-block');
                $('.letterbutton').css('display', 'none');
            }
            else{
                $(this).css('display', 'none');
            }
        });
    });
}