var isSP = false;
var right_show = true;
if (typeof(window.matchMedia) == "function") {
	var widthQuery = window.matchMedia("(max-width:739px)");
	if (typeof(widthQuery.matches) != "undefined" && widthQuery.matches == true) {
	isSP = true;
	}
}

$(document).ready(function(){
	$('.totop').click(function(){
		$('body,html').animate({scrollTop: 0}, "fast");
		return false;
	});

	if (isSP == true) {
		var height = screen.height;

		// SPメニュー開閉
		$("header .sp-menu").click(function(e){
			$(this).parent().addClass("open");
			$('header').css('height', height);
			$(this).parent().find("nav").slideToggle("fast");
			$('body').on('touchmove.noScroll', function(e) {
				e.preventDefault();
			});
			return false;
		});
		$("header .inner nav ul li.close a").click(function(e){
			$(this).parent().parent().parent().parent().parent().removeClass("open");
			$('header').css('height', 'auto');
			$(this).parent().parent().parent().slideToggle("fast");
			$('body').off('.noScroll');
				return false;
			});
		// キービジュアル変更
		$("main .kv img").each(function(){
			$(this).attr("src", $(this).attr("src").replace('_pc', '_sp'));
		});
		// お問い合わせ、体験レッスン申込のスクロール制御
		$(window).scroll(function(){
			if ($(window).scrollTop() > 250 && right_show == true) {
				// 隠す
				$('.right-label').fadeTo(300, 0);
				right_show = false;
			} else if ($(window).scrollTop() <= 250 && right_show == false) {
				// 出す
				$('.right-label').fadeTo(300, 1);
				right_show = true;
			}
		});
	}

	$(window).resize(function(){
		fix_col();
	});
	fix_col();
});

function fix_col() {
	if (isSP != true) {
		var count = $(".col3 ul li").size();
		if (count == 1 || count	== 2 || count == 3 || count == 6) {
			$('.col3 ul').css({'text-align': 'center'});
		}
	}
}