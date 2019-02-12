// Graphs.js
queue()
.defer(d3.csv, "assets/data/CQC_DATA_JAN_19.csv")
.await(makeGraphs)

function makeGraphs(error, data){
    var ndx = crossfilter(data);
    
    chart_Regions(ndx);
    
    createDropdown(ndx);
    $(window).on('resize', function(e){
        var width = $('#content').innerWidth();
        if(width <= '768')
        {   
            $('#regionCountBarChart').hide();
            $('#regionCountRowChart').show(); 
        }
        else{
            $('#regionCountBarChart').show();
            $('#regionCountRowChart').hide();
        }
    });
    //Add the responsive svg class
    $('svg').addClass('svg-content-responsive');
    //Then dependent on the width of the content div, hide the revelent chart
    var width = $('#content').innerWidth();
    if(width <= '768')
    {   
        $('#regionCountBarChart').hide();
        $('#regionCountRowChart').show(); 
    }
    else{
        $('#regionCountBarChart').show();
        $('#regionCountRowChart').hide();
    }

    dc.renderAll();
    $('#Selector').after("<button class=\"regSelect btn btn-danger\" onClick=\"resetChart()\">RESET</button>");
    $('.dc-select-option').each(function(e){
        $('#Selector').after("<button class=\"regSelect btn btn-primary\" value=\""+$(this).val()+"\" onClick=\"filterRowChart('"+$(this).val()+"')\">"+$(this).val().toUpperCase()+"</button>");
    });
    $('button.regSelect').wrapAll('<div id="button_container"/>');
    $('#Selector').hide();
 }

//Select Dropdown
function createDropdown(ndx){
    var dim = ndx.dimension(dc.pluck('Region'));
    var group = dim.group();

    dc.selectMenu('#Selector')
        .dimension(dim)
        .group(group)
        
    
}
//Charts
 function chart_Regions(ndx){
    var dim = ndx.dimension(dc.pluck('Region'));
    var group = dim.group();

   dc.barChart('#regionCountBarChart')
    .width(1400)
    .height(500)
    .margins({top:10, right:50, bottom:30, left:50})
    .dimension(dim)
    .group(group)
    .transitionDuration(500)
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    .elasticY(true)
    .xAxisLabel("Region")
    .yAxis().ticks(20);
    
       
   
dc.rowChart('#regionCountRowChart')
    .width(500)
    .height(500)
    .dimension(dim)
    .group(group)
    .elasticX(true);


    resetChart = function(){
        var dim = ndx.dimension(dc.pluck('Region'));
        group = dim.group();
        dc.barChart('#regionCountBarChart')
        .width(1400)
        .height(500)
        .margins({top:10, right:50, bottom:30, left:50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Region")
        .yAxis().ticks(20);

        dc.rowChart('#regionCountRowChart')
        .width(500)
        .height(500)
        .dimension(dim)
        .group(group)
        .elasticX(true)
        $('#regionCountRowChart').html("");
        $('#regionCountBarChart').html("");

        dc.renderAll();
    }

    filterRowChart = function (value) {
        console.log(value);
        var dim = ndx.dimension(dc.pluck('ServiceTypes'))
        group = reduceByRegion(dim,value);
        STBar = dc.barChart('#regionCountBarChart')
        .width(1400)
        .height(500)
        .margins({top:10, right:50, bottom:30, left:50})
        .dimension(dim)
        .group(group)
        .valueAccessor(function(d){
            if(d.value.match > 0 ){
                return d.value.match;
            } else{
                return 0;
            }
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Service Type")
        .yAxis().ticks(20);

       
        dc.rowChart('#regionCountRowChart')
        .width(500)
        .height(500)
        .dimension(dim)
        .group(group)
        .valueAccessor(function(d){
            if(d.value.match > 0 ){
                return d.value.match;
            } else{
                return 0;
            }
        })
        .elasticX(true);
       
        $('#regionCountRowChart').html("");
        dc.renderAll();
        $('#regionCountBarChart g.x text').each(function(e){
            $(this).css('transform', 'rotate(270deg) translateX(130px)').css('color', '#FFF');
        })
    };
    
       
 
 }
 
 function reduceByRegion(dimension,rank){
     console.log(rank);
    return dimension.group().reduce(
         function(p,v){
             
             p.total++;
             if(v.Region == rank){
                 p.match++
             }
             return p;
         },
         function (p,v){
             p.total--;
             if(v.Region == rank){
                 p.match--
             }
             return p;
         },
         function (){
             return{total:0, match:0}
         }
     );
 }

 
