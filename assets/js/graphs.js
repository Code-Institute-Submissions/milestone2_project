// Graphs.js
queue()
.defer(d3.csv, "assets/data/CQC_DATA_JAN_19.csv")
.await(makeGraphs)

function makeGraphs(error, data){
    console.log(data);
    var ndx = crossfilter(data);
    chart_Regions(ndx);      
    $(window).on('resize', function(e){
        console.log("Window Resized");
        
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
 }

//Select Dropdown
function createDropdown(ndx){
    var dim = ndx.dimension(dc.pluck('Region'));
    var group = dim.group();

    dc.selectMenu('#Selector')
        .dimension(dim)
        .group(group);
    
}


//Charts
 function chart_Regions(ndx){
    var dim = ndx.dimension(dc.pluck('Region'));
    var group = dim.group();
    dc.barChart('#regionCountBarChart')
    .width(1250)
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
    createDropdown(ndx);
    dc.renderAll();   
 
 }