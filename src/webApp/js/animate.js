// 自定义动画
const deviceH = window.innerHeight
const bottomH = $(".fixbottom").height()

let index_animate_pageTitle_p = function (Top) {
    if ($(".page-title").position().top - deviceH  + bottomH < Top) {
        $(".page-title p").addClass("animap")
    }
}
let index_animate_moreAnli_a = function (Top) {
    if ($(".more-anli").position().top - deviceH  + bottomH < Top) {
        $(".more-anli a").addClass("animap")
    }
}
let index_animate_moreAnli_p = function (Top) {
    if ($(".more-anli").position().top - deviceH  + bottomH < Top) {
        $(".more-anli p").addClass("animap")
    }
}
let index_animate_itemTitle_ol = function (Top) {
    if (Top > deviceH / 2) {
        $(".first ol").addClass("animaol")
        index_animate_itemTitle_ol = () => { }
    }
}
let index_animate_anliShow_div = function (Top) {
    if ($(".anli-show").position().top - deviceH  + bottomH < Top) {
        $(".anli-show .title").addClass("animatitle")
    }
}
let index_animate_appNews_h1 = function (Top) {
    if ($(".app-news").position().top - deviceH  + bottomH < Top) {
        $(".app-news h1").addClass("animah1")
    }
}
let index_animate_moreShow_img = function (Top) {
	if ($(".more-show").position().top - deviceH  + bottomH < Top) {
		$(".more-show .pic-4").addClass("animapic4")
		setTimeout(() => { $(".more-show .pic-2").addClass("animapic2") }, 300)
		setTimeout(() => { $(".more-show .pic-3").addClass("animapic3") }, 600)
		setTimeout(() => { $(".more-show .pic-1").addClass("animapic1") }, 900)
	}
}

window.onscroll = function () {
    let scrollTop = $(this).scrollTop()
	const Top = document.documentElement.scrollTop || document.body.scrollTop
	if (Top > 500) {
		$(".gotop").show()
	} else {
		$(".gotop").hide()
	}
    index_animate_moreAnli_a(scrollTop)
    index_animate_moreAnli_p(scrollTop)
    index_animate_pageTitle_p(scrollTop)
    index_animate_itemTitle_ol(scrollTop)
    index_animate_anliShow_div(scrollTop)
    index_animate_appNews_h1(scrollTop)
	index_animate_moreShow_img(scrollTop)
}