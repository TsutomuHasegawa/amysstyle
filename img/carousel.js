var carousel_margin = 0;
var current = 1;
var anum_time = 500;
var move_time = 3000;
var isSP = false;
if (typeof(window.matchMedia) == "function") {
  var widthQuery = window.matchMedia("(max-width:739px)");
  if (typeof(widthQuery.matches) != "undefined" && widthQuery.matches == true) {
    isSP = true;
  }
}

$(document).ready(function(){
    if (isSP == true) {
        $("#slideShow li img").each(function(){
          $(this).attr("src", $(this).attr("src").replace('/pc/', '/sp/'));
        });

        $(".panels li img").each(function(){
          $(this).attr("src", $(this).attr("src").replace('/pc/', '/sp/'));
        });
    }

	$("#slideShow ul li").width($(window).width());

	//スライドショー
    window.onload = function(){
  	$("#slideShow ul").carouFredSel({
  		auto       : {
				timeoutDuration:5000,
  			delay: 5000,
  			onTimeoutStart : function(){
          $("#slideShow ul li").show();
        }
  		},
  		width      : '100%',
  		items      : {
  			visible: 1,
  			start  : 0
  		},
  		scroll     : 1,
  		pagination : {
  			container     : "#slideThumb span"
  		},
        prev : "#prevSlide",
        next : "#nextSlide"
  	});
  }
});