// Graphs.js
queue()
  .defer(d3.csv, "assets/data/CQC_DATA_JAN_19.csv")
  .await(makeGraphs);

function makeGraphs(error, data) {
  var ndx = crossfilter(data);

  chart_Regions(ndx);

  createDropdown(ndx);
  $(window).on("resize", function(e) {
		var width = $("#content").innerWidth();
    if (width <= "960") {
      $("#regionCountBarChart").hide();
      $("#regionCountRowChart").show();
    } else {
      $("#regionCountBarChart").show();
      $("#regionCountRowChart").hide();
    }
  });
  //Add the responsive svg class
  $("svg").addClass("svg-content-responsive");
  //Then dependent on the width of the content div, hide the revelent chart
  var width = $("#content").innerWidth();
  if (width <= "960") {
    $("#regionCountBarChart").hide();
    $("#regionCountRowChart").show();
  } else {
    $("#regionCountBarChart").show();
    $("#regionCountRowChart").hide();
  }

  dc.renderAll();
  $("#regionCountRowChart svg")
    .find("g:first")
    .attr("transform", "translate(5,15)");
  $("#regionCountRowChart svg g.row").each(function(x) {
    var t = $(this)
      .find("title")
      .text();
    $(this)
      .find("text")
      .text(t);
  });
  $("#regionCountBarChart g.x text").each(function(e) {
    $(this)
      .css("transform", "rotate(270deg) translateX(130px)")
      .css("color", "#FFF");
  });
  labels();
  $(".dc-select-option").each(function(e) {
    $("#Selector").before(
      '<button class="regSelect btn btn-primary" data-dimension="Region" value="' +
        $(this).val() +
        '">' +
        $(this)
          .val()
          .toUpperCase() +
        "</button>"
    );
  });
  $("button.regSelect").wrapAll('<div id="button_container"/>');
  $("#button_container").after(
    '<button class="master_reset btn btn-danger" onClick="resetChart()">RESET</button>'
  );
  $("#Selector").hide();
  removeexcessticks();
  resizeButtons(".regSelect");
}
//end make graphs
//Select Dropdown
function createDropdown(ndx) {
  var dim = ndx.dimension(dc.pluck("Region"));
  var group = dim.group();

  dc.selectMenu("#Selector")
    .dimension(dim)
    .group(group);
}
//Charts
function chart_Regions(ndx) {
  var cwidth = $("#content").width();
  var dim = ndx.dimension(dc.pluck("Region"));
  var group = dim.group();

  dc.barChart("#regionCountBarChart")
    .width(cwidth)
    .height(500)
    .margins({ top: 10, right: 50, bottom: 30, left: 50 })
    .dimension(dim)
    .group(group)
    .transitionDuration(500)
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    //.useViewBoxResizing(true)
    .elasticY(true)
    .xAxisLabel("Region")
    .yAxis()
    .ticks(20);

  dc.rowChart("#regionCountRowChart")
    .width(cwidth)
    .height(500)
    .dimension(dim)
    .group(group)
    .elasticX(true)
    .xAxis()
    .tickFormat(function(v) {
      return Math.round(v);
    });
  $("#regionCountRowChart svg g.row").each(function(x) {
    var t = $(this)
      .find("title")
      .text();
    $(this)
      .find("text")
      .text(t);
  });

  resetChart = function() {
    var cwidth = $("#content").width();
    var dim = ndx.dimension(dc.pluck("Region"));
    group = dim.group();
    dc.barChart("#regionCountBarChart")
      .width(cwidth)
      .height(500)
      .margins({ top: 10, right: 50, bottom: 30, left: 50 })
      .dimension(dim)
      .group(group)
      .transitionDuration(500)
      .x(d3.scale.ordinal())
      .xUnits(dc.units.ordinal)
      .elasticY(true)
      .xAxisLabel("Region");

    dc.rowChart("#regionCountRowChart")
      .width(cwidth)
      .height(500)
      .dimension(dim)
      .group(group)
      .elasticX(true)
      .xAxis()
      .tickFormat(function(v) {
        return Math.floor(v);
      });
    $("#regionCountRowChart").html("");
    $("#regionCountBarChart").html("");

    dc.renderAll();
    //With this chart, we need to slightly reduce the amount that it translates
    $("#regionCountRowChart svg")
      .find("g:first")
      .attr("transform", "translate(5,15)");
    //And add the count to each label
    $("#regionCountRowChart svg g.row").each(function(x) {
      var t = $(this)
        .find("title")
        .text();
      $(this)
        .find("text")
        .text(t);
    });
    $("#regionCountBarChart g.x text").each(function(e) {
      $(this)
        .css("transform", "rotate(270deg) translateX(130px)")
        .css("color", "#FFF");
    });
    labels();
    removeexcessticks();
  };

  setView = function(type) {
    var dim = ndx.dimension(dc.pluck(type));
    var group = dim.group();
    $("#Selector").html("");
    dc.selectMenu("#Selector")
      .dimension(dim)
      .group(group)
      .numberVisible(10);

    dc.renderAll();
    $("#regionCountRowChart svg")
      .find("g:first")
      .attr("transform", "translate(5,15)");
    $("#regionCountBarChart g.x text").each(function(e) {
      $(this)
        .css("transform", "rotate(270deg) translateX(130px)")
        .css("color", "#FFF");
    });
    $("#regionCountRowChart svg g.row").each(function(x) {
      var t = $(this)
        .find("title")
        .text();
      $(this)
        .find("text")
        .text(t);
    });
    $("#button_container").remove();
    labels();
    $(".dc-select-option").each(function(e) {
      $("#Selector").before(
        '<button class="regSelect btn btn-primary" data-dimension="' +
          type +
          '" value="' +
          $(this).val() +
          '">' +
          $(this)
            .val()
            .toUpperCase() +
          "</button>"
      );
    });
    $("button.regSelect").wrapAll('<div id="button_container"/>');
    $("#button_container").after(
      '<button class="master_reset btn btn-danger" onClick="resetChart()">RESET</button>'
    );
    if (type == "LocalAuthority") {
      scrollButtons();
    }
    resizeButtons(".regSelect");
  };
  $(document).on("click", ".regSelect", function() {
    var type = $(this).data("dimension");
    var value = $(this).val();
    filterRowChart(type, value);
  });
  filterRowChart = function(type, value) {
    switch (type) {
      case "LocalAuthority":
        redraw("ServiceTypes", "LocalAuthority", value);
        break;
      case "Region":
        redraw("ServiceTypes", "Region", value);
        break;
      case "ServiceTypes":
        redraw("Region", "ServiceTypes", value);
        break;
    }
    function redraw(dimension, type, value) {
      var cwidth = $("#content").width();
      var dim = ndx.dimension(dc.pluck(dimension));
      switch (dimension) {
        case "ServiceTypes":
          group = reduceByServiceTypes(dim, type, value);
          break;
        case "Region":
          group = reduceByRegion(dim, type, value);
          break;
      }
      dc.barChart("#regionCountBarChart")
        .width(cwidth)
        .height(500)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .mouseZoomable(true)
        .valueAccessor(function(d) {
          if (d.value.match > 0) {
            return d.value.match;
          } else {
            return 0;
          }
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Service Type")
        .yAxis()
        .ticks(20);

      dc.rowChart("#regionCountRowChart")
        .width(cwidth)
        .height(500)
        .dimension(dim)
        .group(group)
        .valueAccessor(function(d) {
          if (d.value.match > 0) {
            return d.value.match;
          } else {
            return 0;
          }
        })
        .elasticX(true)
        .xAxis()
        .tickFormat(function(v) {
          return Math.round(v);
        });

      $("#regionCountRowChart").html("");
      dc.renderAll();
      $("#regionCountRowChart svg")
        .find("g:first")
        .attr("transform", "translate(5,15)");
      $("#regionCountRowChart svg g.row").each(function(x) {
        var t = $(this)
          .find("title")
          .text();
        $(this)
          .find("text")
          .text(t);
      });
      $("#regionCountBarChart g.x text").each(function(e) {
        $(this)
          .css("transform", "rotate(270deg) translateX(130px)")
          .css("color", "#FFF");
      });
      labels();
      removeexcessticks();
    }
  };
}
//end chart regions
function reduceByServiceTypes(dimension, type, value) {
  return dimension.group().reduce(
    function(p, v) {
      p.total++;
      switch (type) {
        case "LocalAuthority":
          if (v.LocalAuthority == value) {
            p.match++;
          }
          break;
        case "Region":
          if (v.Region == value) {
            p.match++;
          }
          break;
      }

      return p;
    },
    function(p, v) {
      p.total--;
      switch (type) {
        case "LocalAuthority":
          if (v.LocalAuthority == value) {
            p.match--;
          }
          break;
        case "Region":
          if (v.Region == value) {
            p.match--;
          }
          break;
      }
      return p;
    },
    function() {
      return { total: 0, match: 0 };
    }
  );
}
function reduceByRegion(dimension, type, value) {
  return dimension.group().reduce(
    function(p, v) {
      p.total++;
      switch (type) {
        case "ServiceTypes":
          if (v.ServiceTypes == value) {
            p.match++;
          }
          break;
      }
      return p;
    },
    function(p, v) {
      p.total--;
      switch (type) {
        case "ServiceTypes":
          if (v.ServiceTypes == value) {
            p.match--;
          }
          break;
      }
      return p;
    },
    function() {
      return { total: 0, match: 0 };
    }
  );
}

function labels() {
  var titles = [];
  $(".bar").each(function(e) {
    titles.push(
      $(this)
        .find("title")
        .text()
    );
  });
  var t = 0;
  $(".x .tick").each(function() {
    $(this)
      .find("text")
      .text(titles[t]);
    t++;
  });
}
